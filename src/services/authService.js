const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { signAccessToken } = require("../utils/jwt_helper");

const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) return { success: false, message: "User not found" };

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return { success: false, message: "Invalid credentials" };

    const token = await signAccessToken(user.userId);

    return { success: true, token, user };
  } catch (error) {
    return { success: false, message: "Server Error" };
  }
};

const registerUser = async (name, email, password) => {
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    const user = new User({ name, email, password });

    await user.save();

    const token = await signAccessToken(user.userId);

    return { success: true, token, user };
  } catch (error) {
    return { success: false, message: "Server Error" };
  }
};

module.exports = {
  loginUser,
  registerUser,
};

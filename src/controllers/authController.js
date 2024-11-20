const authService = require("../services/authService");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const result = await authService.registerUser(name, email, password);

    if (!result.success) {
      return res.status(400).json({ message: result.message });
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.loginUser(email, password);
    if (!result.success) {
      return res.status(400).json({ message: result.message });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

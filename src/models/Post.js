const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    date: { type: Date, default: Date.now },
    title: { type: String, require: true, trim: true },
    subTitle: { type: String, required: true, trim: true },
    tags: [{ type: String, trim: true }],
    content: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);

const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },


    email: {
      type: String,
      required: true,
      unique: true,

      match:[/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,'enter the valid address']
    },


    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);


const User = mongoose.model("User", userSchema);


module.exports = User;

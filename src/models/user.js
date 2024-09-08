import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    require: true,
    type: String,
  },
  mobile: {
    require: true,
    type: String,
  },
  email: {
    require: false,
    type: String,
  },
});

const userModel = mongoose.model("Users", UserSchema);

export { userModel };

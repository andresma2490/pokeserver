import bcrypt from "bcryptjs";
import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  nickname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    enum: ["red", "blue", "yellow"],
  },
  last_connection: {
    type: Date,
    default: new Date(),
  },
});

userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.methods.comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

userSchema.pre("save", async function (next) {
  const user = this as any; // TO DO remove "any" type
  if (!user.isModified("password")) {
    return next();
  }
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  next();
});

export default mongoose.model("User", userSchema);

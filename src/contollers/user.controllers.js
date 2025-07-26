import User from "../models/user.model.js";
import { uploadonCloudinary } from "../utils/cloudinary.js";
const userRegister = async (req, res, next) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser)
      return res
        .status(400)
        .json({ error: "Email or Username already in use" });
    if (!req.files)
      return res
        .status(400)
        .json({ error: "Please upload a required picture" });
    const avatarLocalPath = req.files.avatar[0].path;
    if (!avatarLocalPath)
      return res.status(400).json({ error: "Avatar picture is required" });

    const cloudinaryResult = await uploadonCloudinary(avatarLocalPath);
    const user = new User({
      username,
      email,
      password,
      avatar: cloudinaryResult.secure_url,
    });
    await user.save();
    const usersuccess = await User.findOne({ email }).select(
      "-password -refreshToken"
    );
    if (usersuccess)
      return res
        .status(200)
        .json({ message: "User successfully created", user: usersuccess });
  } catch (error) {
    next(error);
  }
};

const userLogin = async (req, res, next) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    const { username, password } = req.body;
    if (!username || !password)
      return res
        .status(400)
        .json({ error: "Username and password are required" });

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: "User not found" });
    if (!user.isPasswordCorrect(password))
      return res
        .status(401)
        .json({ error: "Incorrect password! Enter the correct password" });
    console.log("User logged in successfully");
  } catch (error) {
    next(error);
  }
};
export { userRegister };
export { userLogin };

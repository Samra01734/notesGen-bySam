
import User from "../models/UserModel.js";
import { getToken } from "../utils/token.js";

export const googleAuth = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Name and Email are required",
      });
    }

    let user = await UserModel.findOne({ email });

    if (!user) {
      user = await UserModel.create({
        name,
        email,
      });
    }

    const token = await getToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(200).json({
      success: true,
      message: "Google Login Successful",
      user,
      token,
    });

  } catch (error) {
    console.error("Google Auth Error:", error);

    return res.status(500).json({
      success: false,
      message: "Google Authentication Failed",
      error: error.message,
    });
  }
};


export const logout = async (req, res) => {
    res.clearCookie("token");

    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });
};
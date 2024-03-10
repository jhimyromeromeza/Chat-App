import User from "../models/auth.models.js";

export const getUsers = async (req, res) => {
  try {
    const loggetInUserId = req.user._id;

    const filterUsers = await User.find({
      _id: { $ne: loggetInUserId },
    }).select('-password');

    res.status(200).json({ filterUsers });
  } catch (error) {
    console.log("error in getUsers : ", error.message);
    res.status(500).json({ error: "internar error" });
  }
};

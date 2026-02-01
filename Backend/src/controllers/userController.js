import User from "../models/User.js";

// ADD USER (for testing / simple use)
export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL USERS
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

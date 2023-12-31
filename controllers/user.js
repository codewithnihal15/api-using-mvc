// saare routes ka function rahega
import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});

  const keyword = req.query.keyword;
  console.log(keyword);

  res.json({
    success: true,
    users,
  });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.query);
  await User.create({
    name,
    email,
    password,
  });
  res.status(201).cookie("tempi", "lol").json({
    success: true,
    message: "Registered Succcessfully",
  });
};

export const specialFunc = (req, res) => {
  res.json({
    success: true,
    message: "Just Joking",
  });
};

export const getUserDetails = async (req, res) => {
  const { id } = req.params;
  // console.log(req.params);
  const user = await User.findById(id);
  res.json({
    success: true,
    user,
  });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  // console.log(req.params);
  const user = await User.findById(id);
  res.json({
    success: true,
    message: "Updated",
  });
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  // console.log(req.params);
  res.json({
    success: true,
    message: "Deleted",
  });
};

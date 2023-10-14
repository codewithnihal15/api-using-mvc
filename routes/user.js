//user ka sara server yaha pr store karenge

import express from "express";
import { User } from "../models/user.js";
import {
  deleteUser,
  getAllUsers,
  getUserDetails,
  register,
  specialFunc,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);
router.get("/special", specialFunc);

//one important thing >> if on same URL having different requests then we can do -

router
  .route("/usersid/:id")
  .get(getUserDetails)
  .put(updateUser)
  .delete(deleteUser);

// router.get("/usersid/:id", getUserDetails);

// router.put("/usersid/:id", updateUser);

// router.delete("/usersid/:id", deleteUser);

export default router;

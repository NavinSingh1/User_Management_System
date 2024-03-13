import express from "express";
import {create, getAll, getOne, update, deleteUser} from '../controller/userController.js';

const router = express.Router();

// For Creating new user
router.post("/create", create);

// For get the details of all the users
router.get("/getall", getAll);

// For get the particular details of one user using ID
router.get("/getone/:id", getOne);

// For updating the user details
router.put("/update/:id", update);

// For deleting the user 
router.delete("/delete/:id", deleteUser);

export default router;
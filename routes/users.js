const express = require("express");
const {createUser,  getAllUsers, getUserById,updateUser,deleteUser,patchUser,} = require("../controllers/usercontroller");

const router= express.Router();

// POST /api/users - Create a new user
router.post("/", createUser );
router.get("/",  getAllUsers );
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.put("/:id", patchUser);

module.exports=router;


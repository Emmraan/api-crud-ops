import express from 'express';
import { createUser, readOneUser, updateUser, findUserForUpdate, deleteUser } from '../controllers/controllers';

const router = express.Router();

router.post("/api/user/create",  createUser)
  
.post("/api/user/read",  readOneUser)
  
.post("/api/user/read/update",  findUserForUpdate)
  
.post("/api/user/update",  updateUser)
  
.post("/api/user/delete",  deleteUser);

module.exports = router;
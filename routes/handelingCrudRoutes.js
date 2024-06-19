// handelingCrudRoutes.js
import express from 'express';
import controllers from '../controllers/controllers.js';

const router = express.Router();

router.post("/api/user/create", controllers.createUser);
router.post("/api/user/read", controllers.readOneUser);
router.post("/api/user/read/update", controllers.findUserForUpdate);
router.post("/api/user/update", controllers.updateUser);
router.post("/api/user/delete", controllers.deleteUser);

export default router;
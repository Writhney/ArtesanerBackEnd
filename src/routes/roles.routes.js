import { Router } from "express";
import RolesController from '../controllers/roles.controller';

const router = Router();
const rolesController = new RolesController();

router.get('/', (req,res) => rolesController.getAll(req,res));

export default router;
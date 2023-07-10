import { Router } from "express";
import usersController from "../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.get('/', usersController.findAllUsers);
usersRouter.get('/:idUser', usersController.findOneUser);
usersRouter.post('/', usersController.createOneUser);
usersRouter.delete('/:idUser', usersController.deleteOne);

export default usersRouter;
import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();
const userController = new UserController();

export default function setUserRoutes(app) {
    app.post('/users', userController.createUser.bind(userController));
    app.get('/users/:id', userController.getUser.bind(userController));
    app.put('/users/:id', userController.updateUser.bind(userController));
    app.get('/users', userController.listUsers.bind(userController));
}
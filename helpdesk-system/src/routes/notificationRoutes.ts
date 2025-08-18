import { Router } from 'express';
import NotificationController from '../controllers/notificationController';

const router = Router();
const notificationController = new NotificationController();

export const setNotificationRoutes = (app) => {
    app.use('/api/notifications', router);
    router.post('/', notificationController.sendNotification);
};
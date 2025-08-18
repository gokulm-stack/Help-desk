import { Router } from 'express';
import DashboardController from '../controllers/dashboardController';

const router = Router();
const dashboardController = new DashboardController();

export const setDashboardRoutes = (app) => {
    app.use('/api/dashboard', router);
    router.get('/', dashboardController.getDashboardData);
};
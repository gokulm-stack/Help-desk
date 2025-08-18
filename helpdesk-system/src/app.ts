import express from 'express';
import bodyParser from 'body-parser';
import { setTicketRoutes } from './routes/ticketRoutes';
import { setUserRoutes } from './routes/userRoutes';
import { setNotificationRoutes } from './routes/notificationRoutes';
import { setDashboardRoutes } from './routes/dashboardRoutes';
import { authMiddleware } from './middleware/auth';
import { rolesMiddleware } from './middleware/roles';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(authMiddleware);
app.use(rolesMiddleware);

setTicketRoutes(app);
setUserRoutes(app);
setNotificationRoutes(app);
setDashboardRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
import { Router } from 'express';
import TicketController from '../controllers/ticketController';

const router = Router();
const ticketController = new TicketController();

export function setTicketRoutes(app) {
    app.post('/tickets', ticketController.createTicket.bind(ticketController));
    app.put('/tickets/:id', ticketController.updateTicket.bind(ticketController));
    app.get('/tickets/:id', ticketController.getTicket.bind(ticketController));
    app.get('/tickets', ticketController.listTickets.bind(ticketController));
}
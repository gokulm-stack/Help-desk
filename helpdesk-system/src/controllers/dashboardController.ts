export class DashboardController {
    public getDashboardData(req, res) {
        // Logic to gather and return summary statistics about tickets
        const dashboardData = {
            totalTickets: 100,
            openTickets: 50,
            closedTickets: 30,
            pendingTickets: 20,
        };

        res.status(200).json(dashboardData);
    }
}
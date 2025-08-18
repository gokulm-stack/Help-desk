export function filterTickets(tickets, criteria) {
    return tickets.filter(ticket => {
        let matches = true;
        if (criteria.status) {
            matches = matches && ticket.status === criteria.status;
        }
        if (criteria.priority) {
            matches = matches && ticket.priority === criteria.priority;
        }
        if (criteria.assignedAgent) {
            matches = matches && ticket.assignedAgent === criteria.assignedAgent;
        }
        return matches;
    });
}
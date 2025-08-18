export interface Ticket {
    id: string;
    subject: string;
    description: string;
    category: string;
    priority: 'low' | 'medium' | 'high';
    status: 'open' | 'in progress' | 'resolved' | 'closed';
    comments: Array<{
        userId: string;
        comment: string;
        timestamp: Date;
    }>;
}
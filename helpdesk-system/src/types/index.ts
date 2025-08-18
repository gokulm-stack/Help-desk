export interface Ticket {
    id: string;
    subject: string;
    description: string;
    category: string;
    priority: 'low' | 'medium' | 'high';
    status: 'open' | 'in progress' | 'resolved' | 'closed';
    comments: Comment[];
}

export interface Comment {
    id: string;
    ticketId: string;
    userId: string;
    content: string;
    timestamp: Date;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
}

export interface Role {
    id: string;
    name: 'End User' | 'Agent' | 'Admin';
}

export interface Notification {
    id: string;
    userId: string;
    message: string;
    timestamp: Date;
    read: boolean;
}
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secretKey = 'your_secret_key'; // Replace with your actual secret key

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded;
        next();
    });
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.user?.role !== 'Admin') {
        return res.status(403).json({ message: 'Forbidden: Admins only' });
    }
    next();
};

export const isAgent = (req: Request, res: Response, next: NextFunction) => {
    if (req.user?.role !== 'Agent' && req.user?.role !== 'Admin') {
        return res.status(403).json({ message: 'Forbidden: Agents and Admins only' });
    }
    next();
};
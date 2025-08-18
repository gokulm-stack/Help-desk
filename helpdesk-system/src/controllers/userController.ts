export class UserController {
    private users: any[] = []; // This will hold the user data

    createUser(req: any, res: any) {
        const newUser = req.body;
        this.users.push(newUser);
        res.status(201).json(newUser);
    }

    getUser(req: any, res: any) {
        const userId = req.params.id;
        const user = this.users.find(u => u.id === userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }

    updateUser(req: any, res: any) {
        const userId = req.params.id;
        const index = this.users.findIndex(u => u.id === userId);
        if (index !== -1) {
            this.users[index] = { ...this.users[index], ...req.body };
            res.status(200).json(this.users[index]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }

    listUsers(req: any, res: any) {
        res.status(200).json(this.users);
    }
}
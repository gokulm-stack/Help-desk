# Helpdesk System

## Overview
The Helpdesk System is a ticketing tool designed to manage internal and external support requests. It allows users to create, update, and track tickets, while providing a dashboard for monitoring ticket statistics and notifications for updates.

## Features
- Ticket Management: Create, update, and list tickets.
- User Management: Manage user accounts and roles.
- Notifications: Send notifications related to ticket updates.
- Dashboard: View summary statistics about tickets.
- Search and Filter: Easily search and filter tickets based on various criteria.

## Project Structure
```
helpdesk-system
├── src
│   ├── app.ts
│   ├── controllers
│   │   ├── ticketController.ts
│   │   ├── userController.ts
│   │   ├── notificationController.ts
│   │   └── dashboardController.ts
│   ├── models
│   │   ├── ticket.ts
│   │   ├── user.ts
│   │   ├── role.ts
│   │   └── notification.ts
│   ├── routes
│   │   ├── ticketRoutes.ts
│   │   ├── userRoutes.ts
│   │   ├── notificationRoutes.ts
│   │   └── dashboardRoutes.ts
│   ├── middleware
│   │   ├── auth.ts
│   │   └── roles.ts
│   ├── utils
│   │   ├── search.ts
│   │   └── filter.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd helpdesk-system
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the application:
   ```
   npm start
   ```
2. Access the application in your web browser at `http://localhost:3000`.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.
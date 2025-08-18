export class NotificationController {
    sendNotification(userId: string, message: string): void {
        // Logic to send notification to the user
        console.log(`Notification sent to user ${userId}: ${message}`);
    }
}
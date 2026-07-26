import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],

  // Component-level provider.
  // This creates a NEW NotificationService instance
  // for this component and its children only.
  // It does NOT share the root singleton instance.
  providers: [NotificationService],

  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class Notification {

  constructor(public notificationService: NotificationService) {}

  addNotification() {

    this.notificationService.addMessage(
      'Course enrolled successfully!'
    );

  }

}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-output',
  imports: [CommonModule, RouterLink],
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  loggedInUser: { email: string } | null = null;
  constructor() {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const loggedInEmail = localStorage.getItem('loggedInEmail');
    if (loggedInEmail) {
      this.loggedInUser = storedUsers.find(
        (user: { email: string }) => user.email === loggedInEmail
      ) || null;
    }
  }
}

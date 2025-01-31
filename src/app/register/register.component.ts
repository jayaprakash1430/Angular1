import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    option: '',
    number: ''
  };
  constructor(private router: Router) {}
  clickme() {
    if (this.user.name && this.user.email && this.user.password && this.user.option && this.user.number) {
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      existingUsers.push({ ...this.user });
      localStorage.setItem('users', JSON.stringify(existingUsers));
      alert("Registration successful!");
      this.router.navigate(['login']);
    } else {
      alert("Please enter all details.");
    }
  }
}

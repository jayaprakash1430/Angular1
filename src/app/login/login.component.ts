import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports:[CommonModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUser = {
    email: '',
    password: ''
  };
  constructor(private router: Router) {}
  login() {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = storedUsers.find(
      (storedUser: { email: string; password: string }) =>
        storedUser.email === this.loginUser.email &&
        storedUser.password === this.loginUser.password
    );
    if (user) {
      alert("Login successful!");
      this.router.navigateByUrl('/output');
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }
  register() {
    this.router.navigate(['register']);
  }
}

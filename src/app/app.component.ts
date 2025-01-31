import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome';
  isLoggedIn = false;
  isotp=false;

  user = {
    name: '',
    email: '',
    password: '',
    option: '',
    number: ''
  };

  loginUser = {
    email: '',
    password: ''
  };

  datas: Array<{ name: string; email: string; password: string; option: string; number: string }> = [];
  isLoggedIn1 = false;
  isEditing: boolean = false;
  currentUser: any = null;
  clickme() {
    if (this.isEditing) {
      const index = this.datas.findIndex(u => u.email === this.currentUser.email);
      if (index !== -1) {
        this.datas[index] = { ...this.user };
        this.isLoggedIn = true;
        alert("User updated successfully!");
      }
      this.isEditing = false;
    } else {
      if (this.user.name && this.user.email && this.user.password && this.user.option && this.user.number) {
        this.datas.push({
          ...this.user
        });
        this.user = { name: '', email: '', password: '', option: '', number: '' };
        this.isLoggedIn = true;
        this.isLoggedIn1 = true;
        alert("Registration successful!");
      } else {
        alert("Please enter all details");
        this.isLoggedIn = false;
      }
    }
    this.resetForm();
  }

  login() {
    const foundUser = this.datas.find(
      (user) => user.email === this.loginUser.email && user.password === this.loginUser.password
    );
    
    if (foundUser) {
      alert("Login successful!");
      this.isLoggedIn = true;
      this.loginUser = { email: '', password: '' };
    } else {
      this.isLoggedIn = false;
      alert("Invalid credentials. Please try again.");
    }
  }
  
  deleteRow(userToDelete: { name: string; email: string; password: string; option: string; number: string }) {
    const index = this.datas.indexOf(userToDelete);
    if (index > -1) {
      this.datas.splice(index, 1);
      alert("User deleted successfully!");
    }
  }
   editUser(user: any) {
    this.isEditing = true;
    this.currentUser = user;
    this.user = { ...user };
  }
  
  resetForm() {
    this.isLoggedIn = false;
    this.user = { name: '', email: '', password: '', option: '', number: '' };
    this.isEditing = false;
  }
}
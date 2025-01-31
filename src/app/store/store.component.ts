import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-store',
  imports:[CommonModule,FormsModule,RouterLink],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  datas: Array<{ name: string; email: string; password: string; option: string; number: string }> = [];

  constructor() {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (storedUsers.length > 0) {
      this.datas = storedUsers;
    }
  }
  deleteRow(index: number): void {
    if (index > -1) {
      this.datas.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(this.datas));

      alert('User deleted successfully!');
    }
  }
  editUser(index: number): void {
    const userToEdit = this.datas[index];
    const updatedName = prompt('Update Name:', userToEdit.name);
    const updatedEmail = prompt('Update Email:', userToEdit.email);
    const updatedPassword = prompt('Update Password:', userToEdit.password);
    const updatedOption = prompt('Update Gender:', userToEdit.option);
    const updatedNumber = prompt('Update Mobile:', userToEdit.number);
    if (updatedName && updatedEmail && updatedPassword && updatedOption && updatedNumber) {
      this.datas[index] = {
        name: updatedName,
        email: updatedEmail,
        password: updatedPassword,
        option: updatedOption,
        number: updatedNumber
      };
      localStorage.setItem('users', JSON.stringify(this.datas));

      alert('User updated successfully!');
    }
  }
}

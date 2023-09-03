import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any[] = [];

  addUser(user: any) {
    this.users.push(user);
    console.log('Users after adding:', this.users);
  }

  getUsers() {
    return this.users;
  }
}
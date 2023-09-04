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
    return this.users; // Assuming that `users` is your array of user data
  }
  
  getUserById(userId: string) {
    // Implement logic to retrieve user details by ID from your users array or API
    return this.users.find(user => user.id === userId);
  }

  // Inside user.service.ts
deleteUserById(userId: string) {
  // Implement logic to delete the user by ID
  const index = this.users.findIndex(user => user.id === userId);
  if (index !== -1) {
    this.users.splice(index, 1);
    console.log('Users after deleting:', this.users);
  }
}

updateUser(updatedUser: any) {
  // Find the index of the user with the same ID in the array
  console.log('Hi, I am here!');
  const index = this.users.findIndex(user => user.id === updatedUser.id);

  if (index !== -1) {
    // If the user exists in the array, update their data
    this.users[index] = updatedUser;
  } else {
    // Handle the case where the user was not found (optional)
    console.error(`User with ID ${updatedUser.id} not found.`);
  }
}

}
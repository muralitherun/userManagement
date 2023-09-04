import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  newUser: any = {}; // Initialize an empty object to hold user data

  constructor(private userService: UserService, private router: Router) { }

  addUser() {
    // Call the addUser method from your UserService to add the user
    this.userService.addUser(this.newUser);

    // Clear the form fields after adding the user
    this.newUser = {};

    // Navigate to the dashboard component
    this.router.navigate(['/dashboard']);
  }
}
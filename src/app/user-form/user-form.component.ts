import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  newUser = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  addUser() {
    this.userService.addUser(this.newUser); // Use the userService to add user
    this.newUser = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      phoneNumber: ''
    };
    this.router.navigate(['/dashboard']); // Navigate back to the dashboard
  }
}
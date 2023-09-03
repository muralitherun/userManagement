import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { UserDetailsModalService } from '../user-details.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  users: any[] = [];

  constructor(private userService: UserService, private userDetailsModalService: UserDetailsModalService) {
    this.users = this.userService.getUsers();
    console.log('Retrieved users:', this.users);
  }

  openUserDetailsModal(user: any) {
    console.log('Here!');
    // Set the user details to be displayed in the modal
    this.userDetailsModalService.setUserDetails({
      email: user.email,
      address: user.address,
      phoneNumber: user.phoneNumber,
      // Add more details here if needed
    });

    // Open the modal (you can implement this part based on your preferred modal library)
    // For example, if you are using Bootstrap Modal, you can trigger modal opening here.
  }
}
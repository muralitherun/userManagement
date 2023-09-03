import { Component } from '@angular/core';
import { UserDetailsModalService } from '../user-details.service';

@Component({
  selector: 'app-user-details-modal',
  templateUrl: './user-details-modal.component.html',
  styleUrls: ['./user-details-modal.component.scss']
})
export class UserDetailsModalComponent {
  userDetails: any; // Define userDetails property

  constructor(private userDetailsModalService: UserDetailsModalService) {
    // Retrieve user details from the service
    this.userDetails = this.userDetailsModalService.getUserDetails();
  }

  editUserDetails(userDetails: any) {
    // Implement edit functionality here
  }

  deleteUser(userDetails: any) {
    // Implement delete functionality here
  }
}
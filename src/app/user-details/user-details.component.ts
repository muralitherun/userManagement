import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId');
    if (userId) {
      this.user = this.userService.getUserById(userId);
    } else {
      // Handle the case when userId is null, e.g., show an error message or redirect
      console.error('User ID is missing');
    }
  }

  deleteUser() {
    const userId = this.route.snapshot.paramMap.get('userId');
    if (userId) {
      this.userService.deleteUserById(userId);
      this.router.navigate(['/dashboard']);
    } else {
      // Handle the case when userId is null
      console.error('User ID is missing');
    }
  }

  editUser() {
    // Redirect to the edit user page, passing the user's ID
    const userId = this.route.snapshot.paramMap.get('userId');
    if (userId) {
      this.router.navigate(['/edit-user', userId]);
    } else {
      // Handle the case when userId is null
      console.error('User ID is missing');
    }
  }

}
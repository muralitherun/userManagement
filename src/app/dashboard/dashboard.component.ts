import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  users: any[] = [];

  constructor(private userService: UserService,private router: Router) {
    this.users = this.userService.getUsers();
    console.log('Retrieved users:', this.users);
  }

  openUserDetailsModal(user: any) {
    console.log(user);
    const userId = user.userId; // Replace 'userId' with the actual property name in your 'user' object
    this.router.navigate(['/user-details', userId]);
  }  
  
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms'; // Import NgForm for form handling

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId');
    if (userId) {
      this.user = this.userService.getUserById(userId);
    }
  }

  onSubmit(form: NgForm) {
    // Check if the form is valid
    if (form.valid) {
      // Call the service method to update the user data
      this.userService.updateUser(this.user);

      // Navigate back to the dashboard
      this.router.navigate(['/dashboard']);
    }
  }
}
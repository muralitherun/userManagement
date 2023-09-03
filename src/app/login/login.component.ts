import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';       // Define the 'email' property
  password = '';    // Define the 'password' property

  constructor(private router: Router) {}

  login() {
    // Perform login validation here
    if (this.email === 'harish@gmail.com' && this.password === 'Harish@123') {
      this.router.navigate(['/dashboard']); // Navigate to the dashboard on successful login
    } else {
      alert('Invalid credentials');
    }
  }
}
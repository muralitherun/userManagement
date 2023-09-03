import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsModalService {
  userDetails: any;

  setUserDetails(userDetails: any) {
    this.userDetails = userDetails;
  }

  getUserDetails() {
    return this.userDetails;
  }
}
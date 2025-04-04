
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiokom',
  templateUrl: './fiokom.component.html',
  styleUrls: ['./fiokom.component.css'],
  standalone: false
})
export class FiokomComponent implements OnInit {
  userEmail: string = '';
  username: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const storedEmail = localStorage.getItem('loggedInUser');
    console.log('localStorage tartalma:', storedEmail); 

    if (storedEmail) {
      this.userEmail = storedEmail;
      this.username = storedEmail.split('@')[0]; 
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  editProfile() {
    console.log('Profil szerkesztése');
  }

  logout() {
    
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  purchase() {
    this.router.navigate(['/']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  
  goToRegister() {
    this.router.navigate(['/registration']);
  }
}

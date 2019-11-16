import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {RegistrationService} from '../registration.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
private user;
private userId;
  constructor(private loginservice: AuthenticationService,private registrationService:RegistrationService, private router : Router) { }

  ngOnInit() {
    this.registrationService.getUser().subscribe(data=> this.user=data);

  }
  editUser()
  {
    this.router.navigate(['edit-profile', this.user.id]);
  }

}

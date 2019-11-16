import { Component, OnInit } from '@angular/core';
import {Users} from '../Users';
import {RegistrationService} from '../registration.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // tslint:disable-next-line:new-parens

  constructor(private register: RegistrationService, private router: Router) {
  }

  private user: Users = new class implements Users {
    active: boolean;
    email: string;
    gender: string;
    userId: number;
    mobile: number;
    username: string;
    password: string;
    role: string;

  };

  ngOnInit() {
  }

  createUser() {
    // if (this.user.email != null && this.user.gender != null && this.user.mobileNo != null && this.user.name != null
    //   && this.user.password != null )

    this.register.createUser(this.user).subscribe(data => {

      alert('User created successfully.');
      this.router.navigate(['login']);
    });
    // } else {
    //   alert('Please fill all the details.');
    // }

  }
}

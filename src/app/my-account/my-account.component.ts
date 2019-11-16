import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';
import {ActivatedRoute, convertToParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
 private id;
 private user;
 private email;
 private gender;
 private mobile;
  private username;
   private password;
  constructor(private loginService: RegistrationService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
this.loginService.getUser().subscribe(data=>{
  this.user=data;
  this.email=this.user.email;
  this.mobile=this.user.mobile;
  this.gender=this.user.gender;
  this.id=this.user.id;
  this.username=this.user.username;
});
  }
  editUser() {
    this.loginService.editMyUser(this.user).subscribe(data => {
      this.user = data;
      alert('Details updated successfully.');
      this.router.navigate(['logout']);
    });
  }

}

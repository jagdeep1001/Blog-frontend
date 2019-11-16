import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthguardService} from './authguard.service';
import {BlogsComponent} from './blogs/blogs.component';
import {AddBlogComponent} from './add-blog/add-blog.component';
import {MyAccountComponent} from './my-account/my-account.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home' , component: HomeComponent , canActivate:[AuthguardService]},
  {path: 'signin', component: SignupComponent},
  {path : 'logout', component: LogoutComponent},
  {path : 'blog-detail/:id', component: BlogsComponent},
  {path : 'addBlog', component: AddBlogComponent},
  { path : '', redirectTo: '/home', pathMatch: 'full'},

  {path:'myAccount', component:MyAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

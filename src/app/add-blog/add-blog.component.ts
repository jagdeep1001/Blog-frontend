import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import {Blogs} from '../Blogs';
import {BlogsService} from '../blogs.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {

  constructor(private blogservice:BlogsService , private router: Router) { }
  private  blog : Blogs = new class implements Blogs{
    blog_id: number;
    blog_name: string;
    blog_desc: string;
    blog_img: string;
    blog_category: string;
    blog_author: string;
    blog_date: string;
    blog_content: string;
  }

  ngOnInit() {
  }
  createBlog()
  {
    if(this.blog.blog_name!=null && this.blog.blog_desc!=null && this.blog.blog_author!=null )
    {
      this.blogservice.createBlog(this.blog).subscribe(data =>{
        alert('Blog added!');
        this.router.navigate(['home']);
      });
    }
    else { alert('Please fill all the details');}
  }

}

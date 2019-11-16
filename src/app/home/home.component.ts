import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {BlogsService} from '../blogs.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loginservice: AuthenticationService, private BlogService: BlogsService, private router: Router, private http: HttpClientModule, private route: ActivatedRoute) {
  }

  private blogs;
  private blog_date;

  ngOnInit() {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   const cat = params.get('date');
    //   this.blog_date = cat;})
    this.BlogService.getBlog().subscribe(data => this.blogs = data);

  }

  seeBlog(blog) {
    this.router.navigate(['/blog-detail', blog.blog_id]);
  }

  removeBlog(blog) {
    this.BlogService.removeFromDB(blog.blog_id).subscribe((data) => {
      this.blogs = data;
      alert('Blog Deleted ');

    });
  }
}

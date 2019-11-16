import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BlogsService} from '../blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
private blog;
private blogId;
  constructor(private router: Router, private blogservice: BlogsService , private route: ActivatedRoute) {  }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      const id1 =parseInt(params.get('id'));
      this.blogId=id1;
    });
    this.blogservice.getOneBlog(this.blogId).subscribe(data=>this.blog=data);
  }
  blogs()
  {
    this.router.navigate(['home']);
  }

}

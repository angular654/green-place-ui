import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
interface Post {
  heading: string;
  description: string;
  article: string;
  topic: string;
  author: string;
}

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  public topic = "asdasd"
  public acess_element = "disable"
  changeText: boolean;
  public topics = [{
    title: 'Eco energy',
    img: "../../assets/energy-cat.svg"
  },{
    title: 'Ecology',
    img: "../../assets/eco-icon.svg"
  },
  {
    title: 'Recycling',
    img: "../../assets/recycling-cat.svg"
  },
  {
    title: 'Alternative energy',
    img: "../../assets/alt-energy-cat.svg"
  },
  {
    title: 'Eco fuel',
    img: "../../assets/eco-fuel-cat.svg"
  },
  {
    title: 'Solar energy',
    img: "../../assets/solar-energy-cat.svg"
  }]
  
  postForm = new FormGroup({
    heading: new FormControl('',[Validators.required,Validators.minLength(3),
      Validators.maxLength(60)]),
    description: new FormControl('',[Validators.required,Validators.minLength(6),
      Validators.maxLength(500)]),
    article: new FormControl('',[Validators.required,Validators.minLength(6)]),
  }) 
  constructor(private blog: BlogService, private cookie:CookieService, private router: Router) {}

  ngOnInit(): void {
  }
  choose(el:any) {
    this.topic = el
  } 
 async createPost() {
   const data:Post = {
    ...this.postForm.value,
    author: this.cookie.get('login'),
    topic: this.topic
   }
    await this.blog.createPost(data).then((res)=>{
      console.log(res)
      this.router.navigate(['/'])
    })
    
  }
}

import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
interface Post {
  _id:string
  heading: string;
  description: string;
  article: string;
  topic: string;
  author: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  data = []
  topics = [{
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
  cat = null
  constructor(private blog:BlogService, private router:Router) { }
  range = 3

  async ngOnInit(): Promise<void> {
    await this.getPostsByCat()
  }
  async deletePost(_id:string) {
    await this.blog.removePost(_id).then((res)=>{
      console.log(res)
      this.getPostsByCat()
    })
  }
  async getPostsByCat() {
    await this.blog.findByTopic(this.cat).then((res:Post[])=>{
      this.data = res
      console.log(this.data)
    })
  }
  readMore(){
    this.range = this.data.length
  }

  toCreatePost() {
    this.router.navigate(['/create-post'])
  }
  setImage(type) {
    return this.topics.find(p => p.title === type).img
  }
}

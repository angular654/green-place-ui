import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private router:Router) { }
  private id;

  ngOnInit(): void {
    this.id = this.router.url.split('/')[2]
  }

}

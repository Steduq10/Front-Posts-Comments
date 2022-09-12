import { RequestsService } from 'src/app/service/requests.service';
import { Component, OnInit } from '@angular/core';

import { CreatePostCommand, Post } from 'src/app/service/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  posts?:Post[];
  newTitle:string = "";
  newAuthor: string = "";

  constructor(private requests:RequestsService) { }

  ngOnInit(): void {
    this.bringPosts()
  }

  bringPosts(){
    this.requests.bringAllPosts().subscribe(posts =>
      this.posts = posts)
  }

  submitPost(){
    const newCommand: CreatePostCommand = {
      postId: Math.floor(Math.random() * 100000).toString(),
      title: this.newTitle,
      author: this.newAuthor
    }

    this.requests.CreatePostAction(newCommand).subscribe()
    this.newTitle = "";
    this.newAuthor = "";
  }

}

import { Component, OnInit } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { SocketService } from '../service/socket/socket.service';
import { CreatePostCommand } from '../service/models';
import { Post } from '../service/models';
import { RequestsService } from '../service/requests.service';


@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {

  socketManager?:WebSocketSubject<Post>;

  posts: Post[]=[]
  newTitle:string='';
  newAuthor:string='';

  constructor(private requests: RequestsService, private socket:SocketService) { }

  ngOnInit(): void {
    this.getPosts()
    this.connectToMainSpace()
  }

  getPosts(){
    this.requests.bringAllPosts().subscribe(payLoad =>{
      this.posts = payLoad
    })
  }

  createPost(){
    const newPost:CreatePostCommand = {
      postId: (Math.random()* (10000000 - 100000) * 100000).toString(),
      title: this.newTitle,
      author: this.newAuthor
    }
  }

  submitPost(command:CreatePostCommand){
    this.requests.CreatePostAction(command).subscribe()
  }

  connectToMainSpace(){
    this.socketManager = this.socket.connetGeneralPostSpace()
    this.socketManager.subscribe((message) =>{
      this.addPost(message)
    })
  }

  addPost(post:Post){
    this.newAuthor = ''
    this.newTitle = ''
    this.posts.unshift(post)
  }

  closeSocketConnection(){
    this.socketManager?.complete()
  }

}

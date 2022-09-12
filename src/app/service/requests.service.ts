import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreatePostCommand, Post } from './models';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private client:HttpClient) { }

  httOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  bringAllPosts(): Observable<Post[]>{
    return this.client.get<Post[]>('http://localhost:8081/bringallpost');
  }

  CreatePostAction(command:CreatePostCommand):Observable<Object>{
    return this.client.post('http://localhost:8080/create/post', command, this.httOptions)
  }

}




import { Injectable } from '@angular/core';
import { Post } from '../models';
import { Subject, Observable } from 'rxjs';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket'

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() { }

  connetGeneralPostSpace(): WebSocketSubject<Post>{
    return webSocket('ws://localhost:8082/bringAllPost')
  }
}

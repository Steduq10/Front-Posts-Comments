import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CommentType } from 'src/app/service/models';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css']
})
export class SingleCommentComponent implements OnInit {

  @Input() comment?:CommentType
  constructor() { }

  ngOnInit(): void {
  }

}

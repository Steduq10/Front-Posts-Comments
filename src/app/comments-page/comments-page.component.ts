import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//Falta agregar el service

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.css']
})
export class CommentsPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    //Falta agregar el service
    private location: Location
  ) { }

  ngOnInit(): void {
  }

}

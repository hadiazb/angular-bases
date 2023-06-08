import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post?: Post;
  @Output() clickPost = new EventEmitter<Post>();

  constructor() {}

  ngOnInit(): void {}

  public onClick() {
    this.clickPost.emit(this.post);
  }
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

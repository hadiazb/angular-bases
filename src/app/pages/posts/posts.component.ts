import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private postService: DataService) {}

  ngOnInit(): void {
    this.setPostWithSubscribe();
  }

  public setPostWithSubscribe() {
    this.postService.getPosts<Post[]>().subscribe((posts) => {
      this.posts = posts;
    });
  }

  public listenClick(post: Post) {
    console.log('desde posts', { post });
  }
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

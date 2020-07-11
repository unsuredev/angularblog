import { Component, OnInit } from '@angular/core';
import { Post } from "../post.model";
import { PostsService } from "../posts.service";
import { Subscription } from 'rxjs';
import {Meta ,Title} from '@angular/platform-browser'
@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  Title: "Post title"

  posts: Post[] = [];


  showPosts = false;
  private postsSub: Subscription;

  constructor(public postsService: PostsService ,   private titleService: Title,
    private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.Title);

    this.meta.addTag({name: 'keywords', content: 'Personal blog, Jamaluddin mondal '});
    this.meta.addTag({name: 'description', content: 'RAHUL RJ| '});
    this.meta.addTag({name: 'author', content: 'Rahul626'});
    this.meta.addTag({name: 'robots', content: 'index, follow'});
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {

        this.posts = posts;
        this.showPosts = true;
        console.log('psts ::', this.posts, typeof posts);
      });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }
  onPause(postId: string) {
    this.postsService.pausePost(postId);
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }


}

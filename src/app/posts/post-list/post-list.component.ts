import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { Post } from "../post.model";
import { PostsService } from "../posts.service";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit, OnDestroy {
  Title: "Post list"
  posts: Post[] = [];
  private postsSub: Subscription;
  constructor(public postsService: PostsService ,  private titleService: Title,
    private meta: Meta ) {}


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

      });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
  }

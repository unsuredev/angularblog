// import { AuthGuard } from "./top/auth.guard";
import { Post } from "./posts/post.model";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./body/contact/contact.component";
import { AboutComponent } from "./body/about/about.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagenotfoundComponent } from "./eror/pagenotfound/pagenotfound.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostDashboardComponent } from './posts/post-dashboard/post-dashboard.component';
import { SinglepostComponent } from './posts/singlepost/singlepost.component';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { BASE, CREATE, FEED } from './consts/routes.const';



const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([FEED]);


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },


  { path: 'create', component: PostCreateComponent },


  { path: 'dashboard', component: PostDashboardComponent },
  // display single page for single post
  { path: 'post/:Id', component: SinglepostComponent },

  { path: 'edit/:postId', component: PostCreateComponent },

  {
    path: "posts",
    component: PostListComponent
  },
  {
    path: "login",
    component: PostCreateComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },


  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  //providers: [AuthGuard]
})
export class AppRoutingModule { }

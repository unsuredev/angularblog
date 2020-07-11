import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "./angular-material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./body/about/about.component";
import { PagenotfoundComponent } from "./eror/pagenotfound/pagenotfound.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ContactComponent } from "./body/contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
// import { AuthInterceptor } from "./top/auth-interceptor";
import { ErrorInterceptor } from "./error-interceptor";
import { ErrorComponent } from "./eror/error/error.component";
import { PostsModule } from "./posts/posts.module";
import { SinglepostComponent } from './posts/singlepost/singlepost.component';
import { PostDashboardComponent } from './posts/post-dashboard/post-dashboard.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

import { CKEditorModule } from 'ckeditor4-angular';
import { AppFirebaseModule } from './app-firebase/app-firebase.module';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PagenotfoundComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    SinglepostComponent,
    PostDashboardComponent, ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatIconModule,
    AngularMaterialModule,
    PostsModule,
    RouterModule,
    CKEditorModule,
    AppFirebaseModule


  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }

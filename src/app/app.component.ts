// import { AuthService } from "./top/auth.service";
import { Component} from "@angular/core";
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent  {

  constructor(private _meta: Meta, private _title :Title) {
    this._title.setTitle("Home |  Blog ")
    this._meta.addTags([
    {name: 'description', content: 'Personal blog site ,designed and developed by Jamal'},
    {name: 'description', content: `I'm a developer who writes sometimes.`},
    {name: 'author', content: 'https://github.com/devjamal'},
    {name: 'keywords', content: 'https://twitter.com/unsuredev'}
  ]);



    // this.authService.autoAuthUser();
  }
}

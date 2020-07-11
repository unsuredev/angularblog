import { Component, OnInit } from "@angular/core";
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {


  constructor( private _title : Title, private _meta : Meta) {}

  ngOnInit() {
    this._title.setTitle("About Me |  Jamal")
    this._meta.addTags([
      { name: 'keywords', content: 'About Me Blog, On going process to full stack developer ' },
         {name: 'description', content: `I'm a developer who writes sometimes.`},
    {name: 'author', content: 'https://github.com/devjamal'},
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Jamaluddin Mondal' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2020-10-05', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);


  }
  }

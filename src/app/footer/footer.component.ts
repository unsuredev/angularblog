import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  aboutme =
    "  Since I have a fairly short professional career, I knew I had to think about how I presented myself online. I broke my role down into chunks, instead of simply listing just my title, and took the time necessary to list out my projects and publications worked on. Also, once I’ve peaked their interest, I’ve provided easy ways of contacting me.";

  constructor() {}

  ngOnInit() {}
}

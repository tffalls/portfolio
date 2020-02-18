import { Component, OnInit, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  goToGithub() {
   window.open('https://github.com/tffalls', "_blank");
  }

  goToLinkedIn() {
    window.open('https://www.linkedin.com/in/tarryn-falls-3a90a414a/', "_blank");
  }

}

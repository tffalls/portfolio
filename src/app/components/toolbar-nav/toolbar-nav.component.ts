import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-nav',
  templateUrl: './toolbar-nav.component.html',
  styleUrls: ['./toolbar-nav.component.scss']
})
export class ToolbarNavComponent implements OnInit {
  links = ['Home', 'About', 'Skills', 'Experience', 'Portfolio'];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }

}

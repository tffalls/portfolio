import { Component } from '@angular/core';
import { ToolbarNavComponent } from '../app/components/toolbar-nav/toolbar-nav.component';
import { HomeComponent } from '../app/components/home/home.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-site';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'about-me';

  toggleActive: boolean = false;

  toggle() {
    this.toggleActive = !this.toggleActive
  }
}

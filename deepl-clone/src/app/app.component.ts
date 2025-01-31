import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>HOla mundo</h1>
    <router-outlet></router-outlet>
  `,
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'deepl-clone';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>hola mundo</h1>
  `,
})
export class AppComponent {
  title = 'deepl-clone';
}

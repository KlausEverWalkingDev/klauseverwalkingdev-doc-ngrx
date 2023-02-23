import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'kewd-root',
  standalone: true,
  template: `
    <router-outlet></router-outlet>`,
  imports: [
    RouterOutlet,
  ],
  styles: []
})
export class AppComponent {
  title = 'klauseverwalkingdev-doc-ngrx'
}

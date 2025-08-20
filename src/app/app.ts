import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Homepage } from './homepage/homepage';  // we don't use this rn
// import { RouterLink } from '@angular/router';     // we don't use this rn

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // add later if we use it
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Angular-ChatWebsite');
}



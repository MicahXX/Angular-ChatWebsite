import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Homepage} from './homepage/homepage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Homepage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-ChatWebsite');
}

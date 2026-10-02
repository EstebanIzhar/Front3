import { Component } from '@angular/core';
import { Registro } from './registro/registro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Registro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
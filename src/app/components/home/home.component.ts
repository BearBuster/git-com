import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('textShow', [
      transition('void=>*', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate('800ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('subTitle', [
      transition('void=>*', [
        style({ opacity: 0 }),
        animate('1500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent {}

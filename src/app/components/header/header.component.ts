import { Component } from '@angular/core';
import { Auth } from "../../services/Auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public auth: Auth){ }
}

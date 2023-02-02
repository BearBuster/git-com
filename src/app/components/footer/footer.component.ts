import { Component } from '@angular/core';
import { Auth } from "../../services/Auth.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public auth: Auth){ }
}

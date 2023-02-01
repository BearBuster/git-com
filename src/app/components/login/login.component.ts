import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private auth: Auth) { }

  onSubmit(f: NgForm){
    if(!this.auth.login(f.value.username, f.value.password)){
      alert("Login or Password incorrect !")
    }
  }
}

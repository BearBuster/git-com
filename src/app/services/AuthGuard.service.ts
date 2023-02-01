import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Auth } from "./Auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, public auth: Auth) {}
    
    canActivate(): boolean{
        let res = this.auth.checkLogin()
        if(!res) this.router.navigateByUrl("/login")
        return res
    }
}
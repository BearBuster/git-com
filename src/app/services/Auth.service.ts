import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { users } from 'src/app/data/users';

@Injectable()
export class Auth {
    constructor(private router: Router) {}

    checkLogin(): boolean{
        if(!localStorage.getItem("profileKey")) return false
        return true
    }

    login(username: string, password: string): boolean{
        let logUser = users.find(user =>
            user.login === username &&
            user.password === password
        )
        if(logUser){
            localStorage.setItem("profileKey", String(logUser.id))
            this.router.navigateByUrl("/profile")
            return true
        }
        return false
    }

    logout(){
        localStorage.removeItem("profileKey")
        // this.router.navigateByUrl("/login")
    }
}
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class LoginGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        return this.checkIfLoggedIn();
    }

    private checkIfLoggedIn():boolean{
        let loggedIn:boolean = Math.random()<0.5;
        if(loggedIn){
            console.log("The user is not logged in and can't navigate product details.");
        }
        return loggedIn;
    }

}
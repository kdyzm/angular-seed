import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component(
    {
        selector: 'app',
        template: `
            <a [routerLink]="['']">Home</a>
            <a [routerLink]="[{outlets:{primary: 'home',aux: 'chat'}}]">Open Chat</a>
            <a [routerLink]="[{outlets:{aux: null}}]">Close Chat</a>
            <a [routerLink]="['/product']">Product Detail</a>
            <a [routerLink]="['/product-param',1234]">Product Detail With Param</a>
            <input type="button" value="Product Detail" (click)="navigateToProductDetail()"/>
            <router-outlet></router-outlet>
            <router-outlet name="aux"></router-outlet>
        `
    }
)
export class AppComponent {
    constructor(private _router:Router){

    }
    navigateToProductDetail(){
        this._router.navigate(["/product"]);
    }
}
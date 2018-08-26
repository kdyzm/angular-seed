import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component(
    {
        selector: 'app',
        template: `
            <a [routerLink]="['/']">Home</a>
            <a [routerLink]="['/product']">Product Detail</a>
            <input type="button" value="Product Detail" (click)="navigateToProductDetail()"/>
            <router-outlet></router-outlet>
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
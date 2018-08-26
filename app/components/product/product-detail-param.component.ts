import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'product-param',
    template: `
        <div>
            <h1 class="product-param">Product Details for Product:{{productId}}</h1>
            <router-outlet></router-outlet>
            <p>
                <a [routerLink]="['./seller',5678]">Seller Info</a>
            </p>
        </div>
    `,
    styles: ['.product-param {background: burlywood}']
})
export class ProductDetailParamComponent{
    productId: string;
    constructor(route: ActivatedRoute){
        this.productId=route.snapshot.params['id'];
    }
}
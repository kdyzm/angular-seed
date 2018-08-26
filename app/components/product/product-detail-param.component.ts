import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'product-param',
    template: `
        <h1 class="product-param">Product Details for Product:{{productId}}</h1>
    `,
    styles: ['.product-param {background: burlywood}']
})
export class ProductDetailParamComponent{
    productId: string;
    constructor(route: ActivatedRoute){
        this.productId=route.snapshot.params['id'];
    }
}
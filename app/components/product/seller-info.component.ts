import {Component} from "@angular/core";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
    selector: 'seller',
    template: 'The seller of this product is Mary Lou(98%),selleerId:{{sellerId}}',
    styles: [':host {background: yellow}']
})
export class SellerInfoComponent{
    sellerId: string;
    constructor(route: ActivatedRoute){
        this.sellerId=route.snapshot.params['id'];
    }
}
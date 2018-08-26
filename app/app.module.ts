import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {ProductDetailComponent} from "./components/product/product-detail.component";
import {routing} from "./app.routing";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {ProductDetailParamComponent} from "./components/product/product-detail-param.component";
import {ProductDescriptionComponent} from "./components/product/product-description.component";
import {SellerInfoComponent} from "./components/product/seller-info.component";

@NgModule({
    imports: [BrowserModule,routing],
    declarations:[AppComponent,HomeComponent,ProductDetailComponent,ProductDetailParamComponent,ProductDescriptionComponent,SellerInfoComponent],
    providers:[{provide: LocationStrategy,useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule{}
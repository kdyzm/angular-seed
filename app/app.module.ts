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
import {LoginGuard} from "./components/validate/login-guard";
import {ChatComponent} from "./components/chat/chat.component";

@NgModule({
    imports: [BrowserModule,routing],
    declarations:[
        AppComponent,
        HomeComponent,
        ProductDetailComponent,
        ProductDetailParamComponent,
        ProductDescriptionComponent,
        SellerInfoComponent,
        ChatComponent
    ],
    providers:[{provide: LocationStrategy,useClass: HashLocationStrategy},LoginGuard],
    bootstrap: [AppComponent]
})
export class AppModule{}
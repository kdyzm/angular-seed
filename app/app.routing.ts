import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ProductDetailComponent} from "./components/product/product-detail.component";
import {ProductDetailParamComponent} from "./components/product/product-detail-param.component";
import {ProductDescriptionComponent} from "./components/product/product-description.component";
import {SellerInfoComponent} from "./components/product/seller-info.component";
import {LoginGuard} from "./components/validate/login-guard";
import {ChatComponent} from "./components/chat/chat.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'chat',
        component: ChatComponent,
        outlet: "aux"
    },
    {
        path: 'product',
        component: ProductDetailComponent
    },
    {
        path: 'product-param/:id',
        component: ProductDetailParamComponent,
        children: [
            {
                path: '',
                component: ProductDescriptionComponent
            },
            {
                path: 'seller/:id',
                component: SellerInfoComponent
            }
        ],
        canActivate: [LoginGuard]
    }
];

export const routing = RouterModule.forRoot(routes);

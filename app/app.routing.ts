import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ProductDetailComponent} from "./components/product/product-detail.component";
import {ProductDetailParamComponent} from "./components/product/product-detail-param.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'product',
        component: ProductDetailComponent
    },
    {
        path: 'product-param/:id',
        component: ProductDetailParamComponent
    }
];

export const routing = RouterModule.forRoot(routes);

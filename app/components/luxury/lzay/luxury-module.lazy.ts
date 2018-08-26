import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {LuxuryLazyComponent} from "./luxury.lazy.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component:LuxuryLazyComponent
            }
        ])
    ],
    declarations:[LuxuryLazyComponent]
})
export default class LuxuryModuleLazy{}

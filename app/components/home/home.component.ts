import {Component} from "@angular/core";

@Component({
    selector: 'home',
    template: '<h1 class="home">Home Component</h1>',
    styles:['.home {background: red;width: 70%;height:80px;float: left;box-sizing: border-box;}']
})
export class HomeComponent{}
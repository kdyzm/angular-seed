import {Component} from "@angular/core";

@Component({
    selector: 'chat',
    template: `
        <textarea placeholder="Chat with customer service" class="chat"></textarea>
    `,
    styles:[`.chat {background: #CCC;height: 80px;width: 30%;float: left;display: block;box-sizing: border-box;}`]
})
export class ChatComponent{}
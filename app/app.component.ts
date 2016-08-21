import {Component} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/services/product.service';

import {HTTP_PROVIDERS} from 'angular2/http'; // HTTP_PROVIDERS to import all services needed for using http
import 'rxjs/Rx'; // load this library, but import nothing. this way the js file is executed and all features are available globally

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <h3 style="text-align: center;">{{pageTitle}}</h3>        
            <pm-products></pm-products> 
        </div>
    `,
    directives: [ProductListComponent],
    providers: [ProductService, HTTP_PROVIDERS]
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management!';
}
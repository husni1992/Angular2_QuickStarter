import {Component} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/services/product.service';

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <h3 style="text-align: center;">{{pageTitle}}</h3>        
            <pm-products></pm-products> 
        </div>
    `,
    directives: [ProductListComponent],
    providers: [ProductService]
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management!';
}
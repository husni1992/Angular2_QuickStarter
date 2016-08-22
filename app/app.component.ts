import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http'; // HTTP_PROVIDERS to import all services needed for using http
import 'rxjs/Rx'; // load this library, but import nothing. this way the js file is executed and all features are available globally
import { ROUTER_PROVIDERS,  ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import {WelcomeComponent} from './home/welcome.component';
import {ProductListComponent} from './products/product-list.component';
import {ProductDetailComponent} from './products/product-detail.component';
// import {CustomerComponent} from './home/customer.component';

import {ProductService} from './products/services/product.service';

@Component({
    selector: 'pm-app',
    template: `<div>
                    <nav class='navbar navbar-default'>
                        <div class='container-fluid'>
                            <a class='navbar-brand'>{{pageTitle}}</a>
                            <ul class='nav navbar-nav'>
                                <li><a [routerLink]="['Welcome']">Home</a></li>
                                <li><a [routerLink]="['Products']">Product List</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div class='container'>
                        <router-outlet></router-outlet>
                    </div>
                </div>`,
    directives: [ROUTER_DIRECTIVES], // ROUTER_DIRECTIVES provides [routerLink] and other directives, ProductListComponent is removed because we dont use it directly in html <pm-products>, e just route to it
    providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    {path: '/products', name: 'Products', component: ProductListComponent},
    {path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent },
    // {path: '/customer', name: 'Customer', component: CustomerComponent}
])
export class AppComponent {
    pageTitle: string = 'Acme Product Management!';
}
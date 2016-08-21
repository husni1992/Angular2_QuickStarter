import {Component} from 'angular2/core';

// we dont have selector, because its not a nested component
@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent{
    pageTitle: string = "Product Detail";
}
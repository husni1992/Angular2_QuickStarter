import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {ProductService} from './services/product.service';
import {IProduct} from './product'
import {Router} from 'angular2/router';

// we dont have selector, because its not a nested component
@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
    pageTitle: string = "Product Detail";
    productId: number;
    product: IProduct;
    errorMessage: any;
     
    constructor(private _routeParams: RouteParams, private _router: Router, private _productService: ProductService){
         this.productId = +_routeParams.get('id');
         this.pageTitle += `: ${this.productId}`; 
         console.log(_routeParams.get('id'));
    }

    onBack(): void{
        this._router.navigate(['Products']);
    }

    ngOnInit(): void{
        this._productService.getProduct(this.productId)
            .subscribe(
                (products) => this.product = products,
                (error) => this.errorMessage = <any>error);  
    }
}
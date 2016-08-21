import { Component, OnInit } from 'angular2/core';
import { IProduct } from './product';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import {ProductService} from './services/product.service';

interface IProductList{
    pageTitle: string;
    filterText: string;
    showImage: boolean;
    imageWidth: number;
    imageMargin: number;
    toggleImage(): void;
}

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/styles/product-list.component.css', 'app/products/styles/test.css'],
    // styles: ['thead {color: red}']
    pipes: [ProductFilterPipe],
    directives: [StarComponent]
})

// component life cycle hook interface implemented 'OnInit'.
export class ProductListComponent implements IProductList, OnInit{

    pageTitle: string = "Product List!";
    errorMessage: string;
    filterText: string = '';
    showImage: boolean = false;
    imageWidth: number = 50;
    imageMargin: number = 2;    
    products: IProduct[];

    constructor(private _productService: ProductService){

    }

    onNotify(message: Object): void{
        this.pageTitle = 'Product List: '+message;
    }

    ngOnInit():void{
        this._productService.getProducts()
            .subscribe(
                (products) => this.products = products,
                (error) => this.errorMessage = <any>error);     
    }

    toggleImage(): void{
        console.info(this.filterText);
        this.showImage = !this.showImage;
    }
}
import { Component, OnInit } from 'angular2/core';
import { IProduct } from './product';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { StarComponent } from '../shared/star.component';

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

// component life cycle hook imorted 'OnInit'
export class ProductListComponent implements IProductList, OnInit{

    pageTitle: string = "Product List!";
    filterText: string = '';
    showImage: boolean = false;
    imageWidth: number = 50;
    imageMargin: number = 2;
    
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.4,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ];

    onNotify(message: Object): void{
        this.pageTitle = 'Product List: '+message;
    }

    ngOnInit():void{
        console.info('ngOnInit')
    }

    toggleImage(): void{
        console.info(this.filterText);
        this.showImage = !this.showImage;
    }
}
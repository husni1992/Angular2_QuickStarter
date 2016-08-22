import { Injectable } from 'angular2/core';
import { IProduct } from '../product';

import {Http, Response, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
 
@Injectable()
export class ProductService{

    private _productUrl = 'api/products/products.json';
    constructor(private _http: Http){}

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            // .map((resp: Response) => <IProduct[]>resp.json())
            .map(function(resp: Response){
                return <IProduct[]>resp.json();
            })
            // .do(data => console.log('All: '+JSON.stringify(data)))
            .catch(this.handleError);
            
    }    

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id))
            // .do(data => console.log('All: '+JSON.stringify(data)));
    }

    private handleError(error: Response){
        console.warn(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
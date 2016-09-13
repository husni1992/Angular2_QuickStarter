import { Pipe, PipeTransform } from 'angular2/core';
import { IProduct } from '../product';

@Pipe({
    name: 'productFilter'
})
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
export class ProductFilterPipe implements PipeTransform{

    transform(value: IProduct[], args: string[]): IProduct[]{
        let filterText: string = args[0] ? args[0].toLowerCase(): null;
        return filterText ? value.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterText) != -1) : value;
    }
    
}

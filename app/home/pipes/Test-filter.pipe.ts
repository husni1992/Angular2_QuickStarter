import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'TestFilterPipe'
})
export class TestFilter implements PipeTransform{
    transform(value: any, args: string[]): any{
        return "***"+value+"***";
    }
}
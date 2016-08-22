import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {DataService} from './services/data.service';
import {TestFilter} from './pipes/Test-filter.pipe';

@Component({
    selector: 'pm-customer',
    templateUrl: 'app/home/customer.component.html',
    // providers: [DataService],
    pipes: [TestFilter]
})
export class CustomerComponent{
    textX: string;

    constructor(private _dataService: DataService){

    }

    @Output() clickEvent: EventEmitter<Object> = new EventEmitter<Object>();

    @Output() textEvent: EventEmitter<Object> = new EventEmitter<Object>();

    @Input() address: string;
    @Input() name: string;

    getData(): void{
        var respData = this._dataService.getCustomers();
        console.info("Data recieved: "+respData);
    }

    pasTextX(): void{
        this.textEvent.emit(this.textX);
    }

    emmitEvent(): void{
        this.clickEvent.emit({name: this.name, address: this.address});
    }

}
import { Component, DoCheck } from 'angular2/core';
import {CustomerComponent} from './customer.component';
import {DataService} from './services/data.service';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    directives: [CustomerComponent],
    
    providers: [DataService]
})
export class WelcomeComponent implements DoCheck{
    public name: string = "M.G.Husny Ahamed";
    public address: string = '9B 25L NHS Raddolugama';
    public pageTitle: string = "Welcome";

    onNotify($event): void{
        console.info($event);
    }

    checkText($event): void{
        console.info('Recieved event from child: '+$event);
    }

    // this will run on every change in this component
    ngDoCheck(): void{
        // console.log('ngDoCheck: name = ' + this.name);
    }

}
import {Component} from 'angular2/core';

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <div style="font-weight: 700">My first Component</div>
        </div>
    `
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
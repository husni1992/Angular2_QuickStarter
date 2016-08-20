import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from 'angular2/core'; 

@Component({
    selector: 'rating-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

// export class StarComponent implements OnChanges, OnInit, DoCheck{ if we want we can implement the life cycle hooks, so it must be implemented in the class
export class StarComponent implements OnChanges, OnInit{
    
    starWidth: number = this.rating * 86/5;
    
    // rating: number = 4;
    @Input() rating : number;
    @Input() name : string;

    //add decorator infront @Output(), so this can output things from child component to parent
    @Output() ratingClicked: EventEmitter<Object> = new EventEmitter<Object>();     

    emmitEvent(): any{
        // this.ratingClicked.emit({name: 'husny', designation: 'JS Expert'});
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }

    ngOnInit():void{
        console.info('ngOnInit')
    }

    // this will run on every change in this omponent
    // ngDoCheck(): void{
    //     console.log('ngDoCheck: name = ' + this.name);
    // }

    ngOnChanges(): void{
         console.log('ngOnChanges - name = ' + this.name);
         this.starWidth = this.rating * 86/5;
    }
}
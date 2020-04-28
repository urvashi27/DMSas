/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        // the fade-in/fade-out animation.
        trigger('simpleFadeAnimation', [

            // the "in" style determines the "resting" state of the element when it is visible.
            state('in', style({ opacity: 1 })),

            // fade in when created. this could also be written as transition('void => *')
            transition(':enter', [
                style({ opacity: 0 }),
                animate(1000)
            ]),

            // fade out when destroyed. this could also be written as transition('void => *')
            transition(':leave',
                animate(0, style({ opacity: 0 })))
        ])]
})

export class homeComponent implements OnInit {
    
    constructor() {
        
    }

    ngOnInit() {

    }

   

}

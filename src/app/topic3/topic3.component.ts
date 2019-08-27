import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-topic3',
  templateUrl: './topic3.component.html',
  styleUrls: ['./topic3.component.css']
})
export class Topic3Component implements OnInit {
  constructor() {}

  ngOnInit() {
    //  In contrast to Subject, the AsyncSubject has memory. It will emit only the final value (value output before complete) and not  the intermediate values.
    const aSubject = new AsyncSubject<string>();

    //  Creating the Observable as usual
    const stream$ = aSubject.asObservable();

    //  Earliest subscription
    stream$.subscribe(val => {
      console.log('First Subscriber', val);
    });

    //  AsyncSubject starts data emission
    aSubject.next('A');
    aSubject.next('B');
    aSubject.next('C');

    //  Second subscription. This gets C.
    stream$.subscribe(val => {
      console.log('Second Subscriber', val);
    });

    //  AsyncSubject keeps emitting values. Till F, these values are considered to be intermediate and will not be emitted to the subscribers.
    aSubject.next('D');
    aSubject.next('E');
    aSubject.next('Final');

    //  Let's stop this by calling complete()
    aSubject.complete();

    //  Now this has no effect
    aSubject.next('G');

    //  Subscriber added after the AsyncSubject completed. Even this gets the final value.
    stream$.subscribe(val => {
      console.log('Third Subscriber', val);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-topic2',
  templateUrl: './topic2.component.html',
  styleUrls: ['./topic2.component.css']
})
export class Topic2Component implements OnInit {
  constructor() {}

  ngOnInit() {
    //  In contrast to Subject, the BehaviorSubject has memory. No matter the time of subscription, the subscribers at least get the most recent value emitted. Not only that, even the earliest subscriber will get the initial value. That means, BehaviorSubject should be created with some initial value. Also, BehaviorSubject can be made type-safe by using generic type parameter.
    const bSubject = new BehaviorSubject<string>('Initial Value');

    //  Creating the Observable as usual
    const stream$ = bSubject.asObservable();

    //  Earliest subscription
    stream$.subscribe(val => {
      console.log('First Subscriber', val);
    });

    //  BehaviorSubject starts data emission
    bSubject.next('A');
    bSubject.next('B');
    bSubject.next('C');

    //  Second subscription. This gets C.
    stream$.subscribe(val => {
      console.log('Second Subscriber', val);
    });

    //  BehaviorSubject keeps emitting values. Now both subscribers get values in order
    bSubject.next('D');
    bSubject.next('E');
    bSubject.next('F');

    //  Let's stop this by calling complete()
    bSubject.complete();

    //  Now this has no effect
    bSubject.next('G');
  }
}

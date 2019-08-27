import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-topic4',
  templateUrl: './topic4.component.html',
  styleUrls: ['./topic4.component.css']
})
export class Topic4Component implements OnInit {
  constructor() {}

  ngOnInit() {
    //  In contrast to Subject, the ReplaySubject has memory. This actually replays all the values it has emitted to all the subscribers, even to the ones that are attached afte this was completed.
    const rSubject = new ReplaySubject();

    //  Creating the Observable as usual
    const stream$ = rSubject.asObservable();

    //  Earliest subscription
    stream$.subscribe(val => {
      console.log('First Subscriber', val);
    });

    //  ReplaySubject starts data emission
    rSubject.next('A');
    rSubject.next('B');
    rSubject.next('C');

    //  Second subscription. This gets C.
    stream$.subscribe(val => {
      console.log('Second Subscriber', val);
    });

    //  ReplaySubject keeps emitting values. Now both subscribers get values in order
    rSubject.next('D');
    rSubject.next('E');
    rSubject.next('F');

    //  Let's stop this by calling complete()
    rSubject.complete();

    //  Third subscription. This gets all the values emitted so far.
    stream$.subscribe(val => {
      console.log('Third Subscriber', val);
    });

    //  Now this has no effect
    rSubject.next('G');
  }
}

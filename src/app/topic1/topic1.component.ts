import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-topic1',
  templateUrl: './topic1.component.html',
  styleUrls: ['./topic1.component.css']
})
export class Topic1Component implements OnInit {
  constructor() {}

  ngOnInit() {
    const subject = new Subject();

    const stream$ = subject.asObservable();

    //  Nothing happens because subject has not started to broadcast the data
    stream$.subscribe(val => {
      console.log('Early Subscriber', val);
    });

    subject.next('First Value');
    subject.next(new Date());
    subject.next(true);

    //  This is a late subscriber. The plain subject has no memory. So this late subscriber will not know anything about the earlier data.
    stream$.subscribe(val => {
      console.log('Late Subscriber', val);
    });

    //  If subject emits data at this time, both the subscribers get it.

    subject.next('This appears in both subscribers in the order');

    //  After broadcasting some values, the subject stops by calling complete. This means no data will be emitted further.
    subject.complete();

    subject.next('This will not be available to the stream');
  }
}

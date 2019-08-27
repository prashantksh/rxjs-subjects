import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-topic0',
  templateUrl: './topic0.component.html',
  styleUrls: ['./topic0.component.css']
})
export class Topic0Component implements OnInit, OnDestroy {
  subscriptionObject: Subscription;

  constructor() {}

  ngOnInit() {
    const stream$ = new Observable(observer => {
      const controller = new AbortController();
      setTimeout(() => {
        const n = Math.round(Math.random() * 10);
        const isEven = n % 2 === 0;
        if (isEven) {
          observer.next(`We got an even number: ${n}`);
        } else {
          observer.next(`We got an odd number: ${n}`);
        }
      }, 3000);
    });

    this.subscriptionObject = stream$.subscribe(response => {
      console.log('Subscriber', response);
    });
  }

  ngOnDestroy(): void {
    console.log('OnDestroy, calling unsubscribe');
    this.subscriptionObject.unsubscribe();
  }
}

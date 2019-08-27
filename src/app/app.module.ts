import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Topic1Component } from './topic1/topic1.component';
import { Topic2Component } from './topic2/topic2.component';
import { Topic3Component } from './topic3/topic3.component';
import { Topic4Component } from './topic4/topic4.component';
import { Topic0Component } from './topic0/topic0.component';

@NgModule({
  declarations: [
    AppComponent,
    Topic1Component,
    Topic2Component,
    Topic3Component,
    Topic4Component,
    Topic0Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

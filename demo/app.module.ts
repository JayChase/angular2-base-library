import { NgModule }       from '@angular/core';

import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DemoComponent }   from './demo.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        DemoComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
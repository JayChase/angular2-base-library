import {
    ComponentFixture,
    TestComponentBuilder
} from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import {
    async,
    beforeEachProviders,
    describe,
    expect,
    injectAsync,
    it
} from '@angular/core/testing';

import { AppComponent } from '../../demo/app.component';

describe('App component', () => {
    it('should build without error',
        injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(AppComponent)
                .then((fixture: ComponentFixture<AppComponent>) => {
                    fixture.detectChanges();

                    //set the title
                    //fixture.debugElement.componentInstance.greeting = 'test';

                    //fixture.detectChanges();

                    //check the title heading is test-title                        
                    expect(fixture).not.toBeNull();
                });
        })
    );
})
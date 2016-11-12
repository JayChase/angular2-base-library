import { Component } from '@angular/core';
import {
    async,
    inject,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import { MaterialModule } from '@angular/material';

import { DemoComponent } from '../../demo/demo.component';


describe('demo component', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [              
                MaterialModule.forRoot()
            ],
            declarations: [
                DemoComponent
            ]
        });
    });

    it('should build without error', async(() => {
        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(DemoComponent);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;

            expect(compiled).not.toBeNull();
        });
    }));
});

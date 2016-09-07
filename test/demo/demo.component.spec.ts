import { Component, provide } from '@angular/core';
import {
    async,
    inject,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import { disableDeprecatedForms, provideForms } from '@angular/forms';

import {MdInput} from '@angular2-material/input';

import { DemoComponent } from '../../demo/demo.component';


describe('demo component', () => {

    beforeEach(() => {
        TestBed.compileComponents();
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

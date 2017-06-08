"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var material_1 = require("@angular/material");
var demo_component_1 = require("../../demo/demo.component");
describe('demo component', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                material_1.MdCardModule,
                material_1.MdButtonModule
            ],
            declarations: [
                demo_component_1.DemoComponent
            ]
        });
    });
    it('should build without error', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(demo_component_1.DemoComponent);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).not.toBeNull();
        });
    }));
});
//# sourceMappingURL=demo.component.spec.js.map
"use strict";
var testing_1 = require('@angular/core/testing');
var demo_component_1 = require('../../demo/demo.component');
describe('demo component', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
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
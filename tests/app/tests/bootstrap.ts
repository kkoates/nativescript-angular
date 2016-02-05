//stash it here before Angular runs it over...
const realAssert = global.assert;
import "reflect-metadata";
import {bootstrap} from "../nativescript-angular/application";
import {Component} from "angular2/core";
global.assert = realAssert;

@Component({
    template: "<Button text='OHAI'></Button>"
})
export class SimpleApp {
}

describe('bootstrap', () => {
    describe('start app', () => {
        it('SimpleApp bootstrapped', () => {
            return bootstrap(SimpleApp).then((componentRef) => {
                assert.isTrue(SimpleApp === componentRef.componentType);
            });
        });
    });
});
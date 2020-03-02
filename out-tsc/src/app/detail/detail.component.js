import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Api } from '../services/api.service';
let DetailComponent = class DetailComponent {
    constructor(api) {
        this.api = api;
        this.title = 'detail';
    }
    ngOnInit() {
        this.api.detail.subscribe((data) => {
            console.log(data);
            this.pokemon = data;
        });
    }
    handleBack() {
        window.history.back();
    }
};
DetailComponent = tslib_1.__decorate([
    Component({
        selector: 'detail',
        templateUrl: './detail.component.html',
        providers: [Api]
    }),
    tslib_1.__metadata("design:paramtypes", [Api])
], DetailComponent);
export { DetailComponent };
//# sourceMappingURL=detail.component.js.map
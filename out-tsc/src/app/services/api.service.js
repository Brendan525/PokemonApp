import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
let Api = class Api {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=811';
        this.updateDetail = newDetail => {
            this.detailSubject.next(newDetail);
            window.localStorage.setItem('pokemon-detail', JSON.stringify(newDetail));
        };
        this.getPokemon = () => this.http.get(this.apiUrl);
        this.getDetail = url => this.http.get(url);
        this.getFact = () => this.http.get('http:localhost:4200');
        const initialSubject = window.localStorage.getItem('pokemon-detail');
        const parsedSubject = JSON.parse(initialSubject);
        this.detailSubject = new BehaviorSubject(parsedSubject);
        this.detail = this.detailSubject.asObservable();
    }
};
Api = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], Api);
export { Api };
//# sourceMappingURL=api.service.js.map
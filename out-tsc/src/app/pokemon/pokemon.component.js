import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Api } from '../services/api.service';
import { Router } from '@angular/router';
let PokemonComponent = class PokemonComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.title = 'pokemon';
        this.getAllPokemon = () => {
            this.api
                .getFact()
                .subscribe(data => console.log('DATA FROM FACT CALL', data));
            console.log('BUTTON CLICKED');
            this.api.getPokemon().subscribe((data) => {
                // console.log('GETTING DATA');
                this.list = data.results;
                this.errorMessage = null;
                // console.log(data)
            }, error => {
                this.errorMessage = error.message;
            });
            console.log('AFTER SUBSCRIBE IS CALLED');
        };
        this.getPokemonDetail = url => {
            this.api.getDetail(url).subscribe(data => {
                this.api.updateDetail(data);
                this.router.navigateByUrl('/detail');
            }, error => {
                this.errorMessage = error.message;
            });
            // console.log(url, 'URL');
        };
    }
    handleForward() {
        window.history.forward();
    }
    handleBack() {
        window.history.back();
    }
};
PokemonComponent = tslib_1.__decorate([
    Component({
        selector: 'pokemon',
        templateUrl: './pokemon.component.html',
        // providers: [Api]
        styleUrls: [],
    }),
    tslib_1.__metadata("design:paramtypes", [Api, Router])
], PokemonComponent);
export { PokemonComponent };
//# sourceMappingURL=pokemon.component.js.map
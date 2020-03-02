import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DetailComponent } from './detail/detail.component';
import { Api } from './services/api.service';
const appRoutes = [
    { path: '', component: PokemonComponent },
    { path: 'detail', component: DetailComponent }
];
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            PokemonComponent,
            DetailComponent
        ],
        imports: [
            BrowserModule,
            // AppRoutingModule,
            FormsModule,
            HttpClientModule,
            RouterModule.forRoot(appRoutes)
        ],
        providers: [Api],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
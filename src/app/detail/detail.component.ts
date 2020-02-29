import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api.service';

interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: any[];
    min_level: number;
    form: any[];
    game_indices: any[];
    held_items: any[];
    sprites: {
        front_default: string;
        front_shiny: string;
        front_female: string;
        front_shiny_female: string;
        back_default: string;
        back_shiny: string;
        back_female: string;
        back_shiny_female: string;  
    };
    types: any[];
    stats: any[];
    location_area_encounters: any[];
    is_baby: boolean;
}

interface abilities {
    is_hidden: boolean;
    slot: number;
    ability: any[]
}

@Component({
    selector: 'detail',
    templateUrl: './detail.component.html',
    providers: [Api],
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    title = 'detail';
    pokemon: Pokemon;
    abilities: abilities;
    constructor(private api: Api) {}

    ngOnInit() {
        this.api.detail.subscribe((data: Pokemon) => {
            console.log(data);
            this.pokemon = data;
        });
    }

      handleBack(){
        window.history.back();
    }
}
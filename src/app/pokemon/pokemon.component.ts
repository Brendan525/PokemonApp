import { Component, OnInit} from '@angular/core';
import { Api } from '../services/api.service';
import { Router } from '@angular/router';

interface Pokemon {
  name: string;
  url: string;
}

interface ApiData {
  results: Pokemon[];
  count: number;
  next: string;
  previous: string;
}

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  // providers: [Api]
  styleUrls: [],
})

export class PokemonComponent {
  title = 'pokemon';
  list: object[];
  errorMessage: string;

  constructor(private api: Api, private router: Router) {}
  
  
  getAllPokemon = () => {
    this.api
    .getFact()
    .subscribe(data => console.log('DATA FROM FACT CALL', data));
    
    console.log('BUTTON CLICKED');
      this.api.getPokemon().subscribe(
        (data: ApiData) => {
        // console.log('GETTING DATA');
        this.list = data.results;
        this.errorMessage = null;
        // console.log(data)
      },
      error => {
        this.errorMessage = error.message;
      }
    );
      console.log('AFTER SUBSCRIBE IS CALLED')
  };

  getPokemonDetail = url => {
    this.api.getDetail(url).subscribe(data => {
      this.api.updateDetail(data);
      this.router.navigateByUrl('/detail');
    },
    error => {
      this.errorMessage=error.message;
    }
    );
    // console.log(url, 'URL');
  };

    handleForward(){
    window.history.forward();
  }

  handleBack(){
    window.history.back();
}

}
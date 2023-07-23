import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number = 0;

  constructor(
    private dataService: DataService, private router: Router
  ){}

  ngOnInit(): void {
     this.getPokemons();
  }

 

  //Get Pokemons
  getPokemons(){
    this.dataService.getPokemons(8, this.page + 1)
    .subscribe((response: any) => {
      this.totalPokemons = response.count;

      response.results.forEach((result: any)  => {
        this.dataService.getMoreData(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
            console.log(this.pokemons);
      });
    });
  });

  }
} 


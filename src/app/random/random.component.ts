import { Component, OnInit } from '@angular/core';
import { Personaje, Result } from './personaje';
import { PersonajesService } from './random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  providers: [ PersonajesService ],
  styleUrls: ['./random.component.css']
})
export class PersonajesComponent implements OnInit {
  personajes: Result[] = [];


  constructor(private personajesService: PersonajesService) {

  }

  ngOnInit() {
    this.getPersonajes();
  }

  getPersonajes(): void {
    this.personajesService.getPersonajes('https://rickandmortyapi.com/api/character')
      .subscribe(personajes => (this.personajes = personajes.results));
      console.log(this.personajes);
  }
}

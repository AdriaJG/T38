import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../random/personaje';
import { PersonajesService } from '../random/random.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  providers: [ PersonajesService ],
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  id!: string;
  personajes!: Result;

  constructor(private personajesService: PersonajesService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params['id'];
    this.getPersonajes();
  }

  getPersonajes(): void {
    this.personajesService.getPersonajeID('https://rickandmortyapi.com/api/character/' + this.id)
      .subscribe(personajes => (this.personajes = personajes));
      console.log(this.personajes);
  }

}

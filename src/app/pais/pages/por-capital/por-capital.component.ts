import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {Country} from "../../interfaces/pais.interface";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: []
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {
  }

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarCapital(this.termino)
      .subscribe((paises) => {
        this.paises = paises;
      }, (err) => {
        this.paises = [];
        this.hayError = true;
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
  }


}

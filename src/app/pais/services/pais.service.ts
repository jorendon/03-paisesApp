import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {Country} from "../interfaces/pais.interface";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  get httpParams(){
    return  new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');

  }
  private apiUrl: String = 'https://restcountries.com/v2'

  constructor(private http: HttpClient) {
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

  getPaisPorAlpha(termino: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<Country>(url);
  }

  getPaisPorRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/regionalbloc/${termino}`;
    return this.http.get<Country[]>(url, {params:this.httpParams});
  }


}

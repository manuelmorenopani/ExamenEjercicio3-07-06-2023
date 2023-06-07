import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autobuses } from './modelos/Autobuses';
import { Visitas } from './modelos/Visitas';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BasededatosService {
  Urlautobuses: string = "http://localhost:8080/autobuses";
  Urlvisitas: string = "http://localhost:8080/visitas";

  constructor(private http: HttpClient) { }

listarautobuses(): Observable<Autobuses[]> {
  return this.http.get<Autobuses[]>(this.Urlautobuses);
}
listarvisitas(): Observable<Visitas[]> {
  return this.http.get<Visitas[]>(this.Urlvisitas);
}
}
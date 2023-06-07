import { Component } from '@angular/core';
import { BasededatosService } from '../basededatos.service';
import { Autobuses } from '../modelos/Autobuses';
import { Visitas } from '../modelos/Visitas';
@Component({
  selector: 'app-componentevisualizar-autobusesyvisitas',
  templateUrl: './componentevisualizar-autobusesyvisitas.component.html',
  styleUrls: ['./componentevisualizar-autobusesyvisitas.component.css']
})
export class ComponentevisualizarAutobusesyvisitasComponent {
  autobuses:Autobuses[]= []
  visitas:Visitas[]=[]
  constructor(private servicio : BasededatosService){

  }

  ngOnInit(){
    this.servicio.listarvisitas().subscribe(datos => {
      this.visitas = datos;
    })
      
  this.servicio.listarautobuses().subscribe(datos => {
        this.autobuses = datos;
  })

}}

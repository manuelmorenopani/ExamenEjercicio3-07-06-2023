import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentevisualizarAutobusesyvisitasComponent } from './componentevisualizar-autobusesyvisitas/componentevisualizar-autobusesyvisitas.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentevisualizarAutobusesyvisitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

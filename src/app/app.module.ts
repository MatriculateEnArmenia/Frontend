import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaDeMatriculateComponent } from './acerca-de-matriculate/acerca-de-matriculate.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { InstitucionesComponent } from './instituciones/instituciones.component';
import { RegistroAcudienteComponent } from './registro-acudiente/registro-acudiente.component';
import { RegistroEstudianteComponent } from './registro-estudiante/registro-estudiante.component';
import { LoginComponent } from './login/login.component';
import { PerfilAdministradorComponent } from './perfil-administrador/perfil-administrador.component';
import { NavComponent } from './nav/nav.component';
import { RegistroInstitucionComponent } from './registro-institucion/registro-institucion.component';
import { CuposOfertadosComponent } from './cupos-ofertados/cupos-ofertados.component';
import { AdministradorComponent } from './administrador/administrador.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercaDeMatriculateComponent,
    PublicacionesComponent,
    InstitucionesComponent,
    RegistroAcudienteComponent,
    RegistroEstudianteComponent,
    LoginComponent,
    PerfilAdministradorComponent,
    NavComponent,
    RegistroInstitucionComponent,
    CuposOfertadosComponent,
    AdministradorComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

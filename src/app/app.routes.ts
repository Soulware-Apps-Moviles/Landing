// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AppComponent2 } from '../app 2/app.component';
import { AppComponent } from './app.component';
  // Importa tu componente app2

export const routes: Routes = [
  { path: 'app', component: AppComponent },     // Ruta a la landing page 1 (app)
  { path: 'app2', component: AppComponent2 },   // Ruta a la landing page 2 (app2)
  { path: '', redirectTo: 'app', pathMatch: 'full' } // Redirige por defecto a la landing de app
];

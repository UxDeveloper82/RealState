import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'properties', component: PropertyListComponent}
];

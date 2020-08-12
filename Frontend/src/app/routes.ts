import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'properties', component: PropertyListComponent},
  { path: 'add-property', component: AddPropertyComponent},
  { path: 'property-detail/:id', component: PropertyDetailComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

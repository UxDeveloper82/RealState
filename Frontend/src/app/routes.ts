import { Routes } from '@angular/router';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { PropertyDetailResolverService } from './_resolvers/property-detail-resolver.service';

export const appRoutes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'rent-properties', component: PropertyListComponent},
  { path: 'add-property', component: AddPropertyComponent},
  { path: 'property-detail/:id', component: PropertyDetailComponent,
        resolve: {prp: PropertyDetailResolverService}},
  { path: 'user/login', component: UserLoginComponent},
  { path: 'user/register', component: UserRegisterComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

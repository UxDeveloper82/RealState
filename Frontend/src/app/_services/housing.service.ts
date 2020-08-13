import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Property } from '../_models/property';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map(propertiesArray => {
        // throw new Error('Some error');
        return propertiesArray.find(p => p.Id === id);
      })
    );
  }
   // tslint:disable-next-line: typedef
   getAllProperties(): Observable<Property[]>{
     return this.http.get('data/properties.json').pipe(
       map( data => {
           const propertiesArray: Array<Property> = [];
           for( const id in data) {
             if (data.hasOwnProperty(id)) {
              propertiesArray.push(data[id]);
             }
           }
           return propertiesArray;
       })
     );
   }

}

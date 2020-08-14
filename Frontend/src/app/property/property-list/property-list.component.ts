import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/_models/property';
import { HousingService } from 'src/app/_services/housing.service';
import { IPropertyBase } from 'src/app/_models/ipropertybase';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: IPropertyBase[];
  Today = new Date();
  City = '';
  SearchCity = '';
  SortbyParam = '';
  SortDirection = 'asc';
  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; // Means we are on rent-property URL else we are on base URL
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
        data => {
        this.properties = data;
        console.log(data);
      }, error => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }

  // tslint:disable-next-line: typedef
  onCityFilter() {
    this.SearchCity = this.City;
  }

  // tslint:disable-next-line: typedef
  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }

  // tslint:disable-next-line: typedef
  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }

}

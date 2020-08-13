import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/_models/property';
import { HousingService } from 'src/app/_services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<Property>;
  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
      data => {
        this.properties = data;
        console.log(data);
      }, error => {
        console.error(error);
      }
    );
  }

}

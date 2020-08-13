import { Component, OnInit, Input } from '@angular/core';
import { Property } from 'src/app/_models/property';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input() property: Property;
  @Input() hideIcons: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}

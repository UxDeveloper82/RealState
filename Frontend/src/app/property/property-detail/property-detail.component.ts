import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
import { Property } from 'src/app/_models/property';
import { HousingService } from 'src/app/_services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  property = new Property();
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute,
              private housingService: HousingService,
              private router: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: Property) => {
        // tslint:disable-next-line: no-string-literal
        this.property = data['prp'];
      }
    );
    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/crib-1.jpg',
        medium: 'assets/images/crid-1.jpg',
        big: 'assets/images/crid-1.jpg'
      },
      {
        small: 'assets/images/crib-2.jpg',
        medium: 'assets/images/crib-2.jpg',
        big: 'assets/images/crib-2.jpg'
      },
      {
        small: 'assets/images/crib-3.jpg',
        medium: 'assets/images/crib-3.jpg',
        big: 'assets/images/crib-3.jpg'
      },
      {
        small: 'assets/images/internal-4.jpg',
        medium: 'assets/images/internal-4.jpg',
        big: 'assets/images/internal-4.jpg'
      },
      {
        small: 'assets/images/internal-5.jpg',
        medium: 'assets/images/internal-5.jpg',
        big: 'assets/images/internal-5.jpg'
      }
    ];

  }

  // // tslint:disable-next-line: typedef
  // onSelectNext() {
  //   this.propertyId += 1;
  //   this.router.navigate(['property-detail', this.propertyId]);
  //}

}

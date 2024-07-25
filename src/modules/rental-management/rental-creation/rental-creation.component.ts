import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { Vin } from '../service/proto/api_specification_am_rental_management_pb';
import { RentalManagementService } from '../service/rental-management.service';
import {AuthNService} from "../../../core/auth-n/auth-n.service";

@Component({
  selector: 'app-rental-creation',
  standalone: true,
  imports: [NgIf],
  templateUrl: './rental-creation.component.html',
  styleUrl: './rental-creation.component.scss',
})
export class RentalCreationComponent {
  protected car: VisualRentableCar = {
    vin: '',
    brand: '',
    model: '',
    logoUrl: '',
    rentalPricePerDay: 0,
  };
  protected filters: AvailableCarsSearchFilter = {
    availableFrom: new Timestamp(),
    availableTo: new Timestamp(),
    location: '',
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private readonly authNService: AuthNService,
    private rentalManagementService: RentalManagementService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      if (params.get('availableFrom')) {
        this.filters.availableFrom.fromDate(new Date(params.get('availableFrom')!));
      }
      if (params.get('availableTo')) {
        this.filters.availableTo.fromDate(new Date(params.get('availableTo')!));
      }
      if (params.get('location')) {
        this.filters.location = <string>params.get('location');
      }

      if (params.get('car')) {
        let car = JSON.parse(params.get('car')!);

        this.car = {
          vin: car['vin'],
          logoUrl: car['logoUrl'],
          model: car['model'],
          rentalPricePerDay: +car['rentalPricePerDay'],
          brand: car['brand'],
        };
      }
    });
  }

  async onConfirm() {
    const vin: Vin = new Vin()
    vin.setVin(this.car.vin)

    const userProfile = await this.authNService.getUserProfile();
    if (!userProfile) return;

    const subject = userProfile.sub;
    await this.rentalManagementService.rentCar(subject, this.filters.availableFrom, this.filters.availableTo, vin);

    await this.router.navigate(["/rental-overview"]);
  }

  onCancel() {
    this.router.navigate(['/available-cars-list']);
  }

  protected formatDate(timestamp: Timestamp): string {
    const date = timestamp.toDate();

    let day = '' + date.getDate();
    let month = '' + (date.getMonth() + 1);
    let year = '' + date.getFullYear();

    day = day.length < 2 ? `0${day}` : day;
    month = month.length < 2 ? `0${month}` : month;
    return day + '.' + month + '.' + year;
  }
}

interface AvailableCarsSearchFilter {
  availableFrom: Timestamp;
  availableTo: Timestamp;
  location: string;
}

interface VisualRentableCar {
  vin: string;
  brand: string;
  model: string;
  logoUrl: string;
  rentalPricePerDay: number;
}

import { Component } from '@angular/core';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RentalManagementService } from '../service/rental-management.service';
import { Rental } from '../service/proto/api_specification_am_rental_management_pb';
import {AuthNService} from "../../../core/auth-n/auth-n.service";

@Component({
  selector: 'app-rental-overview',
  standalone: true,
  imports: [NgForOf, NgIf, RouterLink],
  providers: [DatePipe],
  templateUrl: './rental-overview.component.html',
  styleUrl: './rental-overview.component.scss',
})
export class RentalOverviewComponent {
  rentals: VisualRental[] = [];

  constructor(
    private readonly authNService: AuthNService,
    private rentalManagementService: RentalManagementService
  ) {}

  ngOnInit() {
    this.updateRentals();
  }

  private async updateRentals() {
    const userProfile = await this.authNService.getUserProfile();
    if (!userProfile) return;

    const subject = userProfile.sub;
    const customerRentals = await this.rentalManagementService.listCustomerRentals(subject);

    this.rentals = customerRentals.map(this.mapRentalToVisual);
  }

  async cancelRental(rental: VisualRental) {
    const userProfile = await this.authNService.getUserProfile();
    if (!userProfile) return;

    const subject = userProfile.sub;
    await this.rentalManagementService.cancelRental(subject, rental.id);

    await this.updateRentals()
  }

  protected formatDate(date: Date): string {
    let day = '' + date.getDate();
    let month = '' + (date.getMonth() + 1);
    let year = '' + date.getFullYear();

    day = day.length < 2 ? `0${day}` : day;
    month = month.length < 2 ? `0${month}` : month;
    return day + '.' + month + '.' + year;
  }

  private mapRentalToVisual(rental: Rental): VisualRental {
    return {
      id: rental.getId(),
      vin: rental.getCar()!.getVin()!.getVin(),
      brand: rental.getCar()!.getBrand(),
      model: rental.getCar()!.getModel(),
      logoUrl: 'assets/dummycar.png',
      price: rental.getPrice(),
      rentalStart: rental.getStartdate()!.toDate(),
      rentalEnd: rental.getEnddate()!.toDate(),
    };
  }

  protected readonly localStorage = localStorage;
}

interface VisualRental {
  id: string;
  vin: string;
  brand: string;
  model: string;
  logoUrl: string;
  price: number;
  rentalStart: Date;
  rentalEnd: Date;
}

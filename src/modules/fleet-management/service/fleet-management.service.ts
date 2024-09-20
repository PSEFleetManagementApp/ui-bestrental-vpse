import { Injectable } from '@angular/core';
import {
  AddCarToFleetRequest,
  Car, GetMyFleetsRequest,
  ListCarsInFleetRequest,
  RemoveCarFromFleetRequest,
  Vin,
} from './proto/api_specification_am_fleet_management_pb';
import { handleServiceResponse } from '../../response-handler';
import { FleetServiceClient } from './proto/Api_specification_am_fleet_managementServiceClientPb';
import { environment } from '../../../environments/environment';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthNService } from '../../../core/auth-n/auth-n.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FleetManagementService {
  private readonly fleetServiceClient: FleetServiceClient;

  constructor(
    private readonly router: Router,
    private readonly authNService: AuthNService,
    private readonly oAuthService: OAuthService
  ) {
    this.fleetServiceClient = new FleetServiceClient(environment.fleetManagementServiceHost);
  }

  listCarsInFleet(fleetID : string): Promise<Car[]> {
    const request = new ListCarsInFleetRequest();
    //Change to fleet of fleetManager who is logged In
    request.setFleetid(fleetID);

    return new Promise<Car[]>((resolve, reject) => {
      this.fleetServiceClient.listCarsInFleet(request, this.getMetadata(), (err, response) => {
        handleServiceResponse<Car[]>(
          environment.fleetManagementServiceHost,
          'listing cars in fleet',
          err,
          response,
          response?.getError(),
          response?.getCarsList(),
          resolve,
          reject
        );
      });
    });
  }

  addCarToFleet(location: string, vinInput: string, fleetId: string): Promise<Car> {
    const request = new AddCarToFleetRequest();
    const vin = new Vin();
    vin.setVin(vinInput);
    request.setVin(vin);
    request.setFleetid(fleetId);
    request.setLocation(location);

    return new Promise<Car>((resolve, reject) => {
      this.fleetServiceClient.addCarToFleet(request, this.getMetadata(), (err, response) => {
        handleServiceResponse<Car>(
          environment.fleetManagementServiceHost,
          'add car to fleet',
          err,
          response,
          response?.getError(),
          response?.getCar(),
          resolve,
          reject
        );
      });
    });
  }

  removeCarFromFleet(vinInput: string): Promise<Boolean> {
    const request = new RemoveCarFromFleetRequest();
    const vin = new Vin();
    vin.setVin(vinInput);
    request.setVin(vin);

    return new Promise<Boolean>((resolve, reject) => {
      this.fleetServiceClient.removeCarFromFleet(request, this.getMetadata(), (err, response) => {
        handleServiceResponse<Boolean>(
          environment.fleetManagementServiceHost,
          'remove car from fleet',
          err,
          response,
          response?.getError(),
          response?.getResult(),
          resolve,
          reject
        );
      });
    });
  }

  getMyFleets(fleetManager : string): Promise<string[]> {
    const request = new GetMyFleetsRequest();
    request.setFleetmanager(fleetManager);

    return new Promise<string[]>((resolve, reject) => {
      this.fleetServiceClient.getMyFleets(request, this.getMetadata(), (err, response) => {
        handleServiceResponse<string[]>(
          environment.fleetManagementServiceHost,
          'get my fleets',
          err,
          response,
          response?.getError(),
          response?.getFleetidsList(),
          resolve,
          reject
        );
      });
    });

  }

  private getMetadata() {
    return { Authorization: `Bearer ${this.oAuthService.getAccessToken()}` };
  }
}

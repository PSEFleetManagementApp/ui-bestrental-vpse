import { Injectable } from '@angular/core';
import { FleetCoordinatorServiceClient } from "./proto/Api_specification_am_fleet_coordinationServiceClientPb";
import { environment } from "../../../environments/environment";
import {
    Fleet,
    ListFleetsRequest,
    CreateNewFleetRequest,
    DeleteFleetRequest, ChangeFleetManagerRequest
} from "./proto/api_specification_am_fleet_coordination_pb";
import { handleServiceResponse } from "../../response-handler";
import { Router } from "@angular/router";
import { AuthNService } from "../../../core/auth-n/auth-n.service";
import { OAuthService } from "angular-oauth2-oidc";


@Injectable({
  providedIn: 'root'
})
export class FleetCoordinationService {

  private readonly fleetCoordinationServiceClient: FleetCoordinatorServiceClient;

  constructor(
    private readonly router: Router,
    private readonly authNService: AuthNService,
    private readonly oAuthService: OAuthService
  ) {
      this.fleetCoordinationServiceClient = new FleetCoordinatorServiceClient(environment.fleetCoordinationServiceHost);
  }

    public listFleets(): Promise<Fleet[]> {
        const req = new ListFleetsRequest();

        return new Promise<Fleet[]>((resolve, reject) => {
                this.fleetCoordinationServiceClient.listFleets(req, this.getMetadata(), (err, response) => {
                    handleServiceResponse<Fleet[]>(
                      environment.fleetCoordinationServiceHost,
                      "listing fleets",
                      err,
                      response,
                      response?.getError(),
                      response?.getFleetsList(),
                      resolve,
                      reject
                    );
                    console.log(response);
                    });
            });
    }

    public createNewFleet(location : string, fleetManager : string): Promise<Fleet> {
        const req = new CreateNewFleetRequest();
        req.setLocation(location);
        req.setFleetmanager(fleetManager);

        return new Promise<Fleet>((resolve, reject) => {
            this.fleetCoordinationServiceClient.createNewFleet(req, this.getMetadata(), (err, response) => {
                handleServiceResponse<Fleet>(
                  environment.fleetCoordinationServiceHost,
                  "create new fleet",
                  err,
                  response,
                  response?.getError(),
                  response?.getFleet(),
                  resolve,
                  reject);
            });
        });
    }

    public deleteFleet(fleet : Fleet): Promise<boolean> {
        const req = new DeleteFleetRequest();
        req.setFleet(fleet);
        console.log(req.getFleet());

        return new Promise<boolean>((resolve, reject) => {
            this.fleetCoordinationServiceClient.deleteFleet(req, this.getMetadata(), (err, response) => {
                handleServiceResponse<boolean>(
                  environment.fleetCoordinationServiceHost,
                  "delete fleet",
                  err,
                  response,
                  response?.getError(),
                  response?.getResult(),
                  resolve,
                  reject);
            });
        });
    }

    public listFleetManagers(): Promise<string[]> {
        const req = new ListFleetsRequest();

        return new Promise<string[]>((resolve, reject) => {
                this.fleetCoordinationServiceClient.listFleetManagers(req, this.getMetadata(), (err, response) => {
                    handleServiceResponse<string[]>(
                      environment.fleetCoordinationServiceHost,
                      "listing fleet managers",
                      err,
                      response,
                      response?.getError(),
                      response?.getManagersList(),
                      resolve,
                      reject);
                    });
            });
    }

    public changeFleetManager(fleet : Fleet, newManager : string): Promise<boolean> {
        const req = new ChangeFleetManagerRequest();
        req.setFleet(fleet);
        req.setFleetmanager(newManager);

        return new Promise<boolean>((resolve, reject) => {
            this.fleetCoordinationServiceClient.changeFleetManager(req, this.getMetadata(), (err, response) => {
                handleServiceResponse<boolean>(
                  environment.fleetCoordinationServiceHost,
                  "change fleet manager",
                  err,
                  response,
                  response?.getError(),
                  response?.getResult(),
                  resolve,
                  reject);
            });
        });
    }

    private getMetadata() {
      return { Authorization: `Bearer ${this.oAuthService.getAccessToken()}` };
    }
}

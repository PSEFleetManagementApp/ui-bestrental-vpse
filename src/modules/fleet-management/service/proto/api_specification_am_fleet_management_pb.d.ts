import * as jspb from 'google-protobuf'



export class CreateNewFleetRequest extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): CreateNewFleetRequest;

  getFleetmanager(): string;
  setFleetmanager(value: string): CreateNewFleetRequest;

  getFleetid(): string;
  setFleetid(value: string): CreateNewFleetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewFleetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewFleetRequest): CreateNewFleetRequest.AsObject;
  static serializeBinaryToWriter(message: CreateNewFleetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewFleetRequest;
  static deserializeBinaryFromReader(message: CreateNewFleetRequest, reader: jspb.BinaryReader): CreateNewFleetRequest;
}

export namespace CreateNewFleetRequest {
  export type AsObject = {
    location: string,
    fleetmanager: string,
    fleetid: string,
  }
}

export class CreateNewFleetResponse extends jspb.Message {
  getFleet(): Fleet | undefined;
  setFleet(value?: Fleet): CreateNewFleetResponse;
  hasFleet(): boolean;
  clearFleet(): CreateNewFleetResponse;

  getError(): ErrorDetail | undefined;
  setError(value?: ErrorDetail): CreateNewFleetResponse;
  hasError(): boolean;
  clearError(): CreateNewFleetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewFleetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewFleetResponse): CreateNewFleetResponse.AsObject;
  static serializeBinaryToWriter(message: CreateNewFleetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewFleetResponse;
  static deserializeBinaryFromReader(message: CreateNewFleetResponse, reader: jspb.BinaryReader): CreateNewFleetResponse;
}

export namespace CreateNewFleetResponse {
  export type AsObject = {
    fleet?: Fleet.AsObject,
    error?: ErrorDetail.AsObject,
  }
}

export class ChangeFleetManagerRequest extends jspb.Message {
  getFleetid(): string;
  setFleetid(value: string): ChangeFleetManagerRequest;

  getFleetmanager(): string;
  setFleetmanager(value: string): ChangeFleetManagerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeFleetManagerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeFleetManagerRequest): ChangeFleetManagerRequest.AsObject;
  static serializeBinaryToWriter(message: ChangeFleetManagerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeFleetManagerRequest;
  static deserializeBinaryFromReader(message: ChangeFleetManagerRequest, reader: jspb.BinaryReader): ChangeFleetManagerRequest;
}

export namespace ChangeFleetManagerRequest {
  export type AsObject = {
    fleetid: string,
    fleetmanager: string,
  }
}

export class ChangeFleetManagerResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): ChangeFleetManagerResponse;

  getError(): ErrorDetail | undefined;
  setError(value?: ErrorDetail): ChangeFleetManagerResponse;
  hasError(): boolean;
  clearError(): ChangeFleetManagerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeFleetManagerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeFleetManagerResponse): ChangeFleetManagerResponse.AsObject;
  static serializeBinaryToWriter(message: ChangeFleetManagerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeFleetManagerResponse;
  static deserializeBinaryFromReader(message: ChangeFleetManagerResponse, reader: jspb.BinaryReader): ChangeFleetManagerResponse;
}

export namespace ChangeFleetManagerResponse {
  export type AsObject = {
    result: boolean,
    error?: ErrorDetail.AsObject,
  }
}

export class DeleteFleetRequest extends jspb.Message {
  getFleetid(): string;
  setFleetid(value: string): DeleteFleetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFleetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFleetRequest): DeleteFleetRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFleetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFleetRequest;
  static deserializeBinaryFromReader(message: DeleteFleetRequest, reader: jspb.BinaryReader): DeleteFleetRequest;
}

export namespace DeleteFleetRequest {
  export type AsObject = {
    fleetid: string,
  }
}

export class DeleteFleetResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): DeleteFleetResponse;

  getError(): ErrorDetail | undefined;
  setError(value?: ErrorDetail): DeleteFleetResponse;
  hasError(): boolean;
  clearError(): DeleteFleetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFleetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFleetResponse): DeleteFleetResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFleetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFleetResponse;
  static deserializeBinaryFromReader(message: DeleteFleetResponse, reader: jspb.BinaryReader): DeleteFleetResponse;
}

export namespace DeleteFleetResponse {
  export type AsObject = {
    result: boolean,
    error?: ErrorDetail.AsObject,
  }
}

export class AddCarToFleetRequest extends jspb.Message {
  getVin(): Vin | undefined;
  setVin(value?: Vin): AddCarToFleetRequest;
  hasVin(): boolean;
  clearVin(): AddCarToFleetRequest;

  getFleetid(): string;
  setFleetid(value: string): AddCarToFleetRequest;

  getLocation(): string;
  setLocation(value: string): AddCarToFleetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCarToFleetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddCarToFleetRequest): AddCarToFleetRequest.AsObject;
  static serializeBinaryToWriter(message: AddCarToFleetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCarToFleetRequest;
  static deserializeBinaryFromReader(message: AddCarToFleetRequest, reader: jspb.BinaryReader): AddCarToFleetRequest;
}

export namespace AddCarToFleetRequest {
  export type AsObject = {
    vin?: Vin.AsObject,
    fleetid: string,
    location: string,
  }
}

export class AddCarToFleetResponse extends jspb.Message {
  getCar(): Car | undefined;
  setCar(value?: Car): AddCarToFleetResponse;
  hasCar(): boolean;
  clearCar(): AddCarToFleetResponse;

  getError(): ErrorDetail | undefined;
  setError(value?: ErrorDetail): AddCarToFleetResponse;
  hasError(): boolean;
  clearError(): AddCarToFleetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCarToFleetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddCarToFleetResponse): AddCarToFleetResponse.AsObject;
  static serializeBinaryToWriter(message: AddCarToFleetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCarToFleetResponse;
  static deserializeBinaryFromReader(message: AddCarToFleetResponse, reader: jspb.BinaryReader): AddCarToFleetResponse;
}

export namespace AddCarToFleetResponse {
  export type AsObject = {
    car?: Car.AsObject,
    error?: ErrorDetail.AsObject,
  }
}

export class ListCarsInFleetRequest extends jspb.Message {
  getFleetid(): string;
  setFleetid(value: string): ListCarsInFleetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCarsInFleetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCarsInFleetRequest): ListCarsInFleetRequest.AsObject;
  static serializeBinaryToWriter(message: ListCarsInFleetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCarsInFleetRequest;
  static deserializeBinaryFromReader(message: ListCarsInFleetRequest, reader: jspb.BinaryReader): ListCarsInFleetRequest;
}

export namespace ListCarsInFleetRequest {
  export type AsObject = {
    fleetid: string,
  }
}

export class ListCarsInFleetResponse extends jspb.Message {
  getCarsList(): Array<Car>;
  setCarsList(value: Array<Car>): ListCarsInFleetResponse;
  clearCarsList(): ListCarsInFleetResponse;
  addCars(value?: Car, index?: number): Car;

  getError(): ErrorDetail | undefined;
  setError(value?: ErrorDetail): ListCarsInFleetResponse;
  hasError(): boolean;
  clearError(): ListCarsInFleetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCarsInFleetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCarsInFleetResponse): ListCarsInFleetResponse.AsObject;
  static serializeBinaryToWriter(message: ListCarsInFleetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCarsInFleetResponse;
  static deserializeBinaryFromReader(message: ListCarsInFleetResponse, reader: jspb.BinaryReader): ListCarsInFleetResponse;
}

export namespace ListCarsInFleetResponse {
  export type AsObject = {
    carsList: Array<Car.AsObject>,
    error?: ErrorDetail.AsObject,
  }
}

export class RemoveCarFromFleetRequest extends jspb.Message {
  getVin(): Vin | undefined;
  setVin(value?: Vin): RemoveCarFromFleetRequest;
  hasVin(): boolean;
  clearVin(): RemoveCarFromFleetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveCarFromFleetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveCarFromFleetRequest): RemoveCarFromFleetRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveCarFromFleetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveCarFromFleetRequest;
  static deserializeBinaryFromReader(message: RemoveCarFromFleetRequest, reader: jspb.BinaryReader): RemoveCarFromFleetRequest;
}

export namespace RemoveCarFromFleetRequest {
  export type AsObject = {
    vin?: Vin.AsObject,
  }
}

export class RemoveCarFromFleetResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): RemoveCarFromFleetResponse;

  getError(): ErrorDetail | undefined;
  setError(value?: ErrorDetail): RemoveCarFromFleetResponse;
  hasError(): boolean;
  clearError(): RemoveCarFromFleetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveCarFromFleetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveCarFromFleetResponse): RemoveCarFromFleetResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveCarFromFleetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveCarFromFleetResponse;
  static deserializeBinaryFromReader(message: RemoveCarFromFleetResponse, reader: jspb.BinaryReader): RemoveCarFromFleetResponse;
}

export namespace RemoveCarFromFleetResponse {
  export type AsObject = {
    result: boolean,
    error?: ErrorDetail.AsObject,
  }
}

export class ViewCarInformationRequest extends jspb.Message {
  getVin(): Vin | undefined;
  setVin(value?: Vin): ViewCarInformationRequest;
  hasVin(): boolean;
  clearVin(): ViewCarInformationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewCarInformationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ViewCarInformationRequest): ViewCarInformationRequest.AsObject;
  static serializeBinaryToWriter(message: ViewCarInformationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewCarInformationRequest;
  static deserializeBinaryFromReader(message: ViewCarInformationRequest, reader: jspb.BinaryReader): ViewCarInformationRequest;
}

export namespace ViewCarInformationRequest {
  export type AsObject = {
    vin?: Vin.AsObject,
  }
}

export class ViewCarInformationResponse extends jspb.Message {
  getCar(): Car | undefined;
  setCar(value?: Car): ViewCarInformationResponse;
  hasCar(): boolean;
  clearCar(): ViewCarInformationResponse;

  getError(): ErrorDetail | undefined;
  setError(value?: ErrorDetail): ViewCarInformationResponse;
  hasError(): boolean;
  clearError(): ViewCarInformationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewCarInformationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ViewCarInformationResponse): ViewCarInformationResponse.AsObject;
  static serializeBinaryToWriter(message: ViewCarInformationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewCarInformationResponse;
  static deserializeBinaryFromReader(message: ViewCarInformationResponse, reader: jspb.BinaryReader): ViewCarInformationResponse;
}

export namespace ViewCarInformationResponse {
  export type AsObject = {
    car?: Car.AsObject,
    error?: ErrorDetail.AsObject,
  }
}

export class GetMyFleetsRequest extends jspb.Message {
  getFleetmanager(): string;
  setFleetmanager(value: string): GetMyFleetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyFleetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyFleetsRequest): GetMyFleetsRequest.AsObject;
  static serializeBinaryToWriter(message: GetMyFleetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyFleetsRequest;
  static deserializeBinaryFromReader(message: GetMyFleetsRequest, reader: jspb.BinaryReader): GetMyFleetsRequest;
}

export namespace GetMyFleetsRequest {
  export type AsObject = {
    fleetmanager: string,
  }
}

export class GetMyFleetsResponse extends jspb.Message {
  getFleetidsList(): Array<string>;
  setFleetidsList(value: Array<string>): GetMyFleetsResponse;
  clearFleetidsList(): GetMyFleetsResponse;
  addFleetids(value: string, index?: number): GetMyFleetsResponse;

  getError(): ErrorDetail | undefined;
  setError(value?: ErrorDetail): GetMyFleetsResponse;
  hasError(): boolean;
  clearError(): GetMyFleetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyFleetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyFleetsResponse): GetMyFleetsResponse.AsObject;
  static serializeBinaryToWriter(message: GetMyFleetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyFleetsResponse;
  static deserializeBinaryFromReader(message: GetMyFleetsResponse, reader: jspb.BinaryReader): GetMyFleetsResponse;
}

export namespace GetMyFleetsResponse {
  export type AsObject = {
    fleetidsList: Array<string>,
    error?: ErrorDetail.AsObject,
  }
}

export class Vin extends jspb.Message {
  getVin(): string;
  setVin(value: string): Vin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vin.AsObject;
  static toObject(includeInstance: boolean, msg: Vin): Vin.AsObject;
  static serializeBinaryToWriter(message: Vin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vin;
  static deserializeBinaryFromReader(message: Vin, reader: jspb.BinaryReader): Vin;
}

export namespace Vin {
  export type AsObject = {
    vin: string,
  }
}

export class Car extends jspb.Message {
  getVin(): Vin | undefined;
  setVin(value?: Vin): Car;
  hasVin(): boolean;
  clearVin(): Car;

  getBrand(): string;
  setBrand(value: string): Car;

  getModel(): string;
  setModel(value: string): Car;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Car.AsObject;
  static toObject(includeInstance: boolean, msg: Car): Car.AsObject;
  static serializeBinaryToWriter(message: Car, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Car;
  static deserializeBinaryFromReader(message: Car, reader: jspb.BinaryReader): Car;
}

export namespace Car {
  export type AsObject = {
    vin?: Vin.AsObject,
    brand: string,
    model: string,
  }
}

export class Fleet extends jspb.Message {
  getFleetid(): string;
  setFleetid(value: string): Fleet;

  getCarsList(): Array<Car>;
  setCarsList(value: Array<Car>): Fleet;
  clearCarsList(): Fleet;
  addCars(value?: Car, index?: number): Car;

  getLocation(): string;
  setLocation(value: string): Fleet;

  getFleetmanager(): string;
  setFleetmanager(value: string): Fleet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fleet.AsObject;
  static toObject(includeInstance: boolean, msg: Fleet): Fleet.AsObject;
  static serializeBinaryToWriter(message: Fleet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fleet;
  static deserializeBinaryFromReader(message: Fleet, reader: jspb.BinaryReader): Fleet;
}

export namespace Fleet {
  export type AsObject = {
    fleetid: string,
    carsList: Array<Car.AsObject>,
    location: string,
    fleetmanager: string,
  }
}

export class ErrorDetail extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ErrorDetail;

  getDetails(): string;
  setDetails(value: string): ErrorDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorDetail.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorDetail): ErrorDetail.AsObject;
  static serializeBinaryToWriter(message: ErrorDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorDetail;
  static deserializeBinaryFromReader(message: ErrorDetail, reader: jspb.BinaryReader): ErrorDetail;
}

export namespace ErrorDetail {
  export type AsObject = {
    message: string,
    details: string,
  }
}


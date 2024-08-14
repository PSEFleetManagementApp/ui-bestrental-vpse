import * as jspb from 'google-protobuf'



export class CreateNewFleetRequest extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): CreateNewFleetRequest;

  getFleetmanager(): string;
  setFleetmanager(value: string): CreateNewFleetRequest;

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
  getFleet(): Fleet | undefined;
  setFleet(value?: Fleet): ChangeFleetManagerRequest;
  hasFleet(): boolean;
  clearFleet(): ChangeFleetManagerRequest;

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
    fleet?: Fleet.AsObject,
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

export class ListFleetsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFleetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFleetsRequest): ListFleetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFleetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFleetsRequest;
  static deserializeBinaryFromReader(message: ListFleetsRequest, reader: jspb.BinaryReader): ListFleetsRequest;
}

export namespace ListFleetsRequest {
  export type AsObject = {
  }
}

export class ListFleetsResponse extends jspb.Message {
  getFleetsList(): Array<Fleet>;
  setFleetsList(value: Array<Fleet>): ListFleetsResponse;
  clearFleetsList(): ListFleetsResponse;
  addFleets(value?: Fleet, index?: number): Fleet;

  getError(): ErrorDetail | undefined;
  setError(value?: ErrorDetail): ListFleetsResponse;
  hasError(): boolean;
  clearError(): ListFleetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFleetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFleetsResponse): ListFleetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListFleetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFleetsResponse;
  static deserializeBinaryFromReader(message: ListFleetsResponse, reader: jspb.BinaryReader): ListFleetsResponse;
}

export namespace ListFleetsResponse {
  export type AsObject = {
    fleetsList: Array<Fleet.AsObject>,
    error?: ErrorDetail.AsObject,
  }
}

export class ListFleetManagersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFleetManagersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFleetManagersRequest): ListFleetManagersRequest.AsObject;
  static serializeBinaryToWriter(message: ListFleetManagersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFleetManagersRequest;
  static deserializeBinaryFromReader(message: ListFleetManagersRequest, reader: jspb.BinaryReader): ListFleetManagersRequest;
}

export namespace ListFleetManagersRequest {
  export type AsObject = {
  }
}

export class ListFleetManagersResponse extends jspb.Message {
  getManagersList(): Array<string>;
  setManagersList(value: Array<string>): ListFleetManagersResponse;
  clearManagersList(): ListFleetManagersResponse;
  addManagers(value: string, index?: number): ListFleetManagersResponse;

  getError(): ErrorDetail | undefined;
  setError(value?: ErrorDetail): ListFleetManagersResponse;
  hasError(): boolean;
  clearError(): ListFleetManagersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFleetManagersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFleetManagersResponse): ListFleetManagersResponse.AsObject;
  static serializeBinaryToWriter(message: ListFleetManagersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFleetManagersResponse;
  static deserializeBinaryFromReader(message: ListFleetManagersResponse, reader: jspb.BinaryReader): ListFleetManagersResponse;
}

export namespace ListFleetManagersResponse {
  export type AsObject = {
    managersList: Array<string>,
    error?: ErrorDetail.AsObject,
  }
}

export class DeleteFleetRequest extends jspb.Message {
  getFleet(): Fleet | undefined;
  setFleet(value?: Fleet): DeleteFleetRequest;
  hasFleet(): boolean;
  clearFleet(): DeleteFleetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFleetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFleetRequest): DeleteFleetRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFleetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFleetRequest;
  static deserializeBinaryFromReader(message: DeleteFleetRequest, reader: jspb.BinaryReader): DeleteFleetRequest;
}

export namespace DeleteFleetRequest {
  export type AsObject = {
    fleet?: Fleet.AsObject,
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

export class Fleet extends jspb.Message {
  getFleetid(): string;
  setFleetid(value: string): Fleet;

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


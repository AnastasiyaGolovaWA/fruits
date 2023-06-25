/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { DeliveriesDto } from '../models/deliveries-dto';
import { DeliveryResponseDto } from '../models/delivery-response-dto';

@Injectable({
  providedIn: 'root',
})
export class ApiDeliveryControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation receiveDeliveries
   */
  static readonly ReceiveDeliveriesPath = '/deliveries';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `receiveDeliveries()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  receiveDeliveries$Response(params: {
    body: DeliveriesDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ApiDeliveryControllerService.ReceiveDeliveriesPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `receiveDeliveries$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  receiveDeliveries(params: {
    body: DeliveriesDto
  },
  context?: HttpContext

): Observable<string> {

    return this.receiveDeliveries$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getDeliveryById
   */
  static readonly GetDeliveryByIdPath = '/deliveries/{deliveryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDeliveryById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeliveryById$Response(params: {
    deliveryId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DeliveryResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ApiDeliveryControllerService.GetDeliveryByIdPath, 'get');
    if (params) {
      rb.path('deliveryId', params.deliveryId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeliveryResponseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDeliveryById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeliveryById(params: {
    deliveryId: number;
  },
  context?: HttpContext

): Observable<DeliveryResponseDto> {

    return this.getDeliveryById$Response(params,context).pipe(
      map((r: StrictHttpResponse<DeliveryResponseDto>) => r.body as DeliveryResponseDto)
    );
  }

}

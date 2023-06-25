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

import { ReportDto } from '../models/report-dto';

@Injectable({
  providedIn: 'root',
})
export class ApiReportControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation generateReport
   */
  static readonly GenerateReportPath = '/reports/generate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generateReport()` instead.
   *
   * This method doesn't expect any request body.
   */
  generateReport$Response(params: {
    startDate: string;
    endDate: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ReportDto>> {

    const rb = new RequestBuilder(this.rootUrl, ApiReportControllerService.GenerateReportPath, 'get');
    if (params) {
      rb.query('startDate', params.startDate, {});
      rb.query('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReportDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `generateReport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generateReport(params: {
    startDate: string;
    endDate: string;
  },
  context?: HttpContext

): Observable<ReportDto> {

    return this.generateReport$Response(params,context).pipe(
      map((r: StrictHttpResponse<ReportDto>) => r.body as ReportDto)
    );
  }

}

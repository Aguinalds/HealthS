/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Remedio } from '../models/remedio';

@Injectable({
  providedIn: 'root',
})
export class RemedioService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiRemedioGet
   */
  static readonly ApiRemedioGetPath = '/api/Remedio';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRemedioGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRemedioGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Remedio>>> {

    const rb = new RequestBuilder(this.rootUrl, RemedioService.ApiRemedioGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Remedio>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRemedioGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRemedioGet$Plain(params?: {
  }): Observable<Array<Remedio>> {

    return this.apiRemedioGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Remedio>>) => r.body as Array<Remedio>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRemedioGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRemedioGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Remedio>>> {

    const rb = new RequestBuilder(this.rootUrl, RemedioService.ApiRemedioGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Remedio>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRemedioGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRemedioGet$Json(params?: {
  }): Observable<Array<Remedio>> {

    return this.apiRemedioGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Remedio>>) => r.body as Array<Remedio>)
    );
  }

  /**
   * Path part for operation apiRemedioPost
   */
  static readonly ApiRemedioPostPath = '/api/Remedio';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRemedioPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRemedioPost$Plain$Response(params?: {
    body?: Remedio
  }): Observable<StrictHttpResponse<Remedio>> {

    const rb = new RequestBuilder(this.rootUrl, RemedioService.ApiRemedioPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Remedio>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRemedioPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRemedioPost$Plain(params?: {
    body?: Remedio
  }): Observable<Remedio> {

    return this.apiRemedioPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Remedio>) => r.body as Remedio)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRemedioPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRemedioPost$Json$Response(params?: {
    body?: Remedio
  }): Observable<StrictHttpResponse<Remedio>> {

    const rb = new RequestBuilder(this.rootUrl, RemedioService.ApiRemedioPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Remedio>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRemedioPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRemedioPost$Json(params?: {
    body?: Remedio
  }): Observable<Remedio> {

    return this.apiRemedioPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Remedio>) => r.body as Remedio)
    );
  }

  /**
   * Path part for operation apiRemedioIdGet
   */
  static readonly ApiRemedioIdGetPath = '/api/Remedio/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRemedioIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRemedioIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Remedio>> {

    const rb = new RequestBuilder(this.rootUrl, RemedioService.ApiRemedioIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Remedio>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRemedioIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRemedioIdGet$Plain(params: {
    id: number;
  }): Observable<Remedio> {

    return this.apiRemedioIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Remedio>) => r.body as Remedio)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRemedioIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRemedioIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Remedio>> {

    const rb = new RequestBuilder(this.rootUrl, RemedioService.ApiRemedioIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Remedio>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRemedioIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRemedioIdGet$Json(params: {
    id: number;
  }): Observable<Remedio> {

    return this.apiRemedioIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Remedio>) => r.body as Remedio)
    );
  }

  /**
   * Path part for operation apiRemedioIdPut
   */
  static readonly ApiRemedioIdPutPath = '/api/Remedio/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRemedioIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRemedioIdPut$Response(params: {
    id: number;
    body?: Remedio
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RemedioService.ApiRemedioIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRemedioIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRemedioIdPut(params: {
    id: number;
    body?: Remedio
  }): Observable<void> {

    return this.apiRemedioIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiRemedioIdDelete
   */
  static readonly ApiRemedioIdDeletePath = '/api/Remedio/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRemedioIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRemedioIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RemedioService.ApiRemedioIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRemedioIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRemedioIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiRemedioIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

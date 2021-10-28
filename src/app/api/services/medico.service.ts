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

import { Medico } from '../models/medico';

@Injectable({
  providedIn: 'root',
})
export class MedicoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiMedicoGet
   */
  static readonly ApiMedicoGetPath = '/api/Medico';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMedicoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicoGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Medico>>> {

    const rb = new RequestBuilder(this.rootUrl, MedicoService.ApiMedicoGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Medico>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMedicoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicoGet$Plain(params?: {
  }): Observable<Array<Medico>> {

    return this.apiMedicoGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Medico>>) => r.body as Array<Medico>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMedicoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicoGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Medico>>> {

    const rb = new RequestBuilder(this.rootUrl, MedicoService.ApiMedicoGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Medico>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMedicoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicoGet$Json(params?: {
  }): Observable<Array<Medico>> {

    return this.apiMedicoGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Medico>>) => r.body as Array<Medico>)
    );
  }

  /**
   * Path part for operation apiMedicoPost
   */
  static readonly ApiMedicoPostPath = '/api/Medico';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMedicoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMedicoPost$Plain$Response(params?: {
    body?: Medico
  }): Observable<StrictHttpResponse<Medico>> {

    const rb = new RequestBuilder(this.rootUrl, MedicoService.ApiMedicoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Medico>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMedicoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMedicoPost$Plain(params?: {
    body?: Medico
  }): Observable<Medico> {

    return this.apiMedicoPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Medico>) => r.body as Medico)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMedicoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMedicoPost$Json$Response(params?: {
    body?: Medico
  }): Observable<StrictHttpResponse<Medico>> {

    const rb = new RequestBuilder(this.rootUrl, MedicoService.ApiMedicoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Medico>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMedicoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMedicoPost$Json(params?: {
    body?: Medico
  }): Observable<Medico> {

    return this.apiMedicoPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Medico>) => r.body as Medico)
    );
  }

  /**
   * Path part for operation apiMedicoIdGet
   */
  static readonly ApiMedicoIdGetPath = '/api/Medico/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMedicoIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicoIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Medico>> {

    const rb = new RequestBuilder(this.rootUrl, MedicoService.ApiMedicoIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Medico>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMedicoIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicoIdGet$Plain(params: {
    id: number;
  }): Observable<Medico> {

    return this.apiMedicoIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Medico>) => r.body as Medico)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMedicoIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicoIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Medico>> {

    const rb = new RequestBuilder(this.rootUrl, MedicoService.ApiMedicoIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Medico>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMedicoIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicoIdGet$Json(params: {
    id: number;
  }): Observable<Medico> {

    return this.apiMedicoIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Medico>) => r.body as Medico)
    );
  }

  /**
   * Path part for operation apiMedicoIdPut
   */
  static readonly ApiMedicoIdPutPath = '/api/Medico/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMedicoIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMedicoIdPut$Response(params: {
    id: number;
    body?: Medico
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MedicoService.ApiMedicoIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiMedicoIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMedicoIdPut(params: {
    id: number;
    body?: Medico
  }): Observable<void> {

    return this.apiMedicoIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiMedicoIdDelete
   */
  static readonly ApiMedicoIdDeletePath = '/api/Medico/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMedicoIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicoIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MedicoService.ApiMedicoIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiMedicoIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicoIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiMedicoIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

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

import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root',
})
export class PacienteService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPacienteGet
   */
  static readonly ApiPacienteGetPath = '/api/Paciente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacienteGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacienteGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Paciente>>> {

    const rb = new RequestBuilder(this.rootUrl, PacienteService.ApiPacienteGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Paciente>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPacienteGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacienteGet$Plain(params?: {
  }): Observable<Array<Paciente>> {

    return this.apiPacienteGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Paciente>>) => r.body as Array<Paciente>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacienteGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacienteGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Paciente>>> {

    const rb = new RequestBuilder(this.rootUrl, PacienteService.ApiPacienteGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Paciente>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPacienteGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacienteGet$Json(params?: {
  }): Observable<Array<Paciente>> {

    return this.apiPacienteGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Paciente>>) => r.body as Array<Paciente>)
    );
  }

  /**
   * Path part for operation apiPacientePost
   */
  static readonly ApiPacientePostPath = '/api/Paciente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacientePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPacientePost$Plain$Response(params?: {
    body?: Paciente
  }): Observable<StrictHttpResponse<Paciente>> {

    const rb = new RequestBuilder(this.rootUrl, PacienteService.ApiPacientePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Paciente>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPacientePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPacientePost$Plain(params?: {
    body?: Paciente
  }): Observable<Paciente> {

    return this.apiPacientePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Paciente>) => r.body as Paciente)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacientePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPacientePost$Json$Response(params?: {
    body?: Paciente
  }): Observable<StrictHttpResponse<Paciente>> {

    const rb = new RequestBuilder(this.rootUrl, PacienteService.ApiPacientePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Paciente>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPacientePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPacientePost$Json(params?: {
    body?: Paciente
  }): Observable<Paciente> {

    return this.apiPacientePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Paciente>) => r.body as Paciente)
    );
  }

  /**
   * Path part for operation apiPacienteIdGet
   */
  static readonly ApiPacienteIdGetPath = '/api/Paciente/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacienteIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacienteIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Paciente>> {

    const rb = new RequestBuilder(this.rootUrl, PacienteService.ApiPacienteIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Paciente>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPacienteIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacienteIdGet$Plain(params: {
    id: number;
  }): Observable<Paciente> {

    return this.apiPacienteIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Paciente>) => r.body as Paciente)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacienteIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacienteIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Paciente>> {

    const rb = new RequestBuilder(this.rootUrl, PacienteService.ApiPacienteIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Paciente>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPacienteIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacienteIdGet$Json(params: {
    id: number;
  }): Observable<Paciente> {

    return this.apiPacienteIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Paciente>) => r.body as Paciente)
    );
  }

  /**
   * Path part for operation apiPacienteIdPut
   */
  static readonly ApiPacienteIdPutPath = '/api/Paciente/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacienteIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPacienteIdPut$Response(params: {
    id: number;
    body?: Paciente
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PacienteService.ApiPacienteIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiPacienteIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPacienteIdPut(params: {
    id: number;
    body?: Paciente
  }): Observable<void> {

    return this.apiPacienteIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPacienteIdDelete
   */
  static readonly ApiPacienteIdDeletePath = '/api/Paciente/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacienteIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacienteIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PacienteService.ApiPacienteIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiPacienteIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacienteIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiPacienteIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

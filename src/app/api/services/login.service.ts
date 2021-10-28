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

import { Login } from '../models/login';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }
  public fazerLogin(login: Login): Observable<ResponseLogin> {
    return this.http.post<ResponseLogin>(
      'https://localhost:5001/api/Login',
      login);
  }
  /**
   * Path part for operation apiLoginGet
   */
  static readonly ApiLoginGetPath = '/api/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLoginGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Login>>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.ApiLoginGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Login>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLoginGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginGet$Plain(params?: {
  }): Observable<Array<Login>> {

    return this.apiLoginGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Login>>) => r.body as Array<Login>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLoginGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Login>>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.ApiLoginGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Login>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLoginGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginGet$Json(params?: {
  }): Observable<Array<Login>> {

    return this.apiLoginGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Login>>) => r.body as Array<Login>)
    );
  }

  /**
   * Path part for operation apiLoginPost
   */
  static readonly ApiLoginPostPath = '/api/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLoginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLoginPost$Plain$Response(params?: {
    body?: Login
  }): Observable<StrictHttpResponse<Login>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.ApiLoginPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Login>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLoginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLoginPost$Plain(params?: {
    body?: Login
  }): Observable<Login> {

    return this.apiLoginPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Login>) => r.body as Login)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLoginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLoginPost$Json$Response(params?: {
    body?: Login
  }): Observable<StrictHttpResponse<Login>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.ApiLoginPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Login>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLoginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLoginPost$Json(params?: {
    body?: Login
  }): Observable<Login> {

    return this.apiLoginPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Login>) => r.body as Login)
    );
  }

  /**
   * Path part for operation apiLoginIdGet
   */
  static readonly ApiLoginIdGetPath = '/api/Login/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLoginIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Login>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.ApiLoginIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Login>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLoginIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginIdGet$Plain(params: {
    id: number;
  }): Observable<Login> {

    return this.apiLoginIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Login>) => r.body as Login)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLoginIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Login>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.ApiLoginIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Login>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLoginIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginIdGet$Json(params: {
    id: number;
  }): Observable<Login> {

    return this.apiLoginIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Login>) => r.body as Login)
    );
  }

  /**
   * Path part for operation apiLoginIdPut
   */
  static readonly ApiLoginIdPutPath = '/api/Login/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLoginIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLoginIdPut$Response(params: {
    id: number;
    body?: Login
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.ApiLoginIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiLoginIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLoginIdPut(params: {
    id: number;
    body?: Login
  }): Observable<void> {

    return this.apiLoginIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiLoginIdDelete
   */
  static readonly ApiLoginIdDeletePath = '/api/Login/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLoginIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.ApiLoginIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiLoginIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiLoginIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

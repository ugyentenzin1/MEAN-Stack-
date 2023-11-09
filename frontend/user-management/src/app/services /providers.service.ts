import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {Providers} from "../models /providers";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  //url End Point to our app
  apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  getProviders(): Observable<Providers[]> {
    return this.http.get<Providers[]>(this.apiUrl);
  }
}

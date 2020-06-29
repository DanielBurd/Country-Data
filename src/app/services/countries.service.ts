import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryModel } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private myHttpClient:HttpClient) { }


  public getAllCountriesAsync():Promise<CountryModel[]>{ // call to get all countires data from the api
      const observable=this.myHttpClient.get<CountryModel[]>('https://restcountries.eu/rest/v2/all');
      return observable.toPromise();
  }
}

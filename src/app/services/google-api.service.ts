import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GoogleAPIService {

  private BASE_URL = 'https://www.googleapis.com/customsearch/v1';
  private cx = 'a006ee226f8c142e6';
  private apiKey = environment.GOOGLE_API_KEY; // You can fetch it from wherever you store your API keys

  constructor(private http: HttpClient) {}

  fetchDataFromApi(payload: any): Observable<any> {
    let params = new HttpParams()
      .set('key', this.apiKey)
      .set('cx', this.cx);

    // Add any additional parameters
    for (const key in payload) {
      if (payload.hasOwnProperty(key)) {
        params = params.set(key, payload[key]);
      }
    }

    return this.http.get(this.BASE_URL, { params });
  }

  searchLinks(query: string, startIndex: number): Observable<any> {
    const payload = {
      q: query,
      // searchType: 'image',
      start: startIndex.toString() // Set the start index for pagination
    };
    return this.fetchDataFromApi(payload);
  }

  searchImages(query: string, startIndex: number): Observable<any> {
    const payload = {
      q: query,
      searchType: 'image',
      start: startIndex.toString() // Set the start index for pagination
    };
    return this.fetchDataFromApi(payload);
  }
}

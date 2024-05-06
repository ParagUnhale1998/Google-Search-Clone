import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private apiKey = environment.RAPID_API_KEY; // You can fetch it from wherever you store your API keys

  search(query: string, startIndex: number): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'google-search74.p.rapidapi.com',
    });

    const params = new HttpParams()
      .set('query', query)
      .set('limit', '50')
      .set('related_keywords', 'true')
      .set('start', startIndex.toString());

    return this.http.get('https://google-search74.p.rapidapi.com/', {
      headers,
      params,
    });
  }
}

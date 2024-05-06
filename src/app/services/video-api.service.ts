import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoApiService {
  constructor(private http: HttpClient) {}
  private apiKey = environment.RAPID_API_KEY; // You can fetch it from wherever you store your API keys

  searchVideos(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
    });

    const params = new HttpParams()
      .set('q', query);

    return this.http.get('https://youtube-search-results.p.rapidapi.com/youtube-search/', {
      headers: headers,
      params: params
    });
  }
}

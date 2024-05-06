import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageApiService {
  constructor(private http: HttpClient) {}
  private apiKey = environment.RAPID_API_KEY; // You can fetch it from wherever you store your API keys

  searchImages(query: string, startIndex: number): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'google-search72.p.rapidapi.com',
    });

    const params = new HttpParams()
      .set('q', query)
      .set('gl', 'us')
      .set('lr', 'lang_en')
      // .set('related_keywords', 'true')
      .set('num', '10')
      .set('start', startIndex.toString());
    return this.http.get('https://google-search72.p.rapidapi.com/imagesearch', {
      headers,
      params,
    });
  }
}

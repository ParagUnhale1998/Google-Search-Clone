import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchTermService {
  private searchTermSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  setSearchTerm(term: string) {
    this.searchTermSubject.next(term);
  }

  getSearchTerm(): Observable<string> {
    return this.searchTermSubject.asObservable();
  }

  getCurrentSearchTerm(): string {
    return this.searchTermSubject.getValue();
  }
  
}

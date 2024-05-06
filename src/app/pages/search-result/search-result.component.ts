import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { GoogleAPIService } from 'src/app/services/google-api.service';
import { SearchTermService } from 'src/app/services/search-term.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  selectedTab: string = 'all'; // Default selected tab in parent
  
  onTabSelected(tabName: string) {
    this.selectedTab = tabName;
  }


}

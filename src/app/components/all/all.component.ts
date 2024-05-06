import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { GoogleAPIService } from 'src/app/services/google-api.service';
import { SearchTermService } from 'src/app/services/search-term.service';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  cardsArray: any[] = Array(10).fill(0);
  searchTerm!: string;
  data: any;
  currentPage = 1;

  constructor(
    private route: ActivatedRoute,
    private googleApi: GoogleAPIService,
    private apiService: ApiService,
    private searchService: SearchTermService,
  ) {
    this.searchService.getSearchTerm().subscribe((term) => {
      this.searchTerm = term;
    });
  }

  ngOnInit(): void {
    this.fetchData(this.searchTerm, this.currentPage);
    this.route.queryParams.subscribe((params) => {
      // Retrieve the value of 'q' from the query parameters
      this.searchTerm = params['q'];
      this.currentPage = params['page'] ? +params['page'] : this.currentPage;

      console.log('Retrieved value:', this.searchTerm);
      this.fetchData(this.searchTerm, this.currentPage);
    });
  }

  fetchData(searchValue: any, pageIndex: any) {
    this.googleApi.searchLinks(searchValue, pageIndex).subscribe(
      (response) => {
        console.log(response);
        this.data = response;
        // Here you can process the response data as needed
      },
      (error) => {
        console.error(error);
      }
    );
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.searchLinks();
    // this.searchImages();
  }

  searchLinks() {
    // Call DataService method to search links with query and startIndex
    this.fetchData(this.searchTerm, this.currentPage * 10 - 9);
    // this.router.navigate(['/search'], { 
    //   queryParams: { 
    //     q: this.searchTerm,
    //     page: this.currentPage  // Include the currentPage as a query parameter
    //   } 
    // });
  }
}

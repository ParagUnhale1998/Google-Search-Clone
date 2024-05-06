import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchTermService } from 'src/app/services/search-term.service';

@Component({
  selector: 'app-searchinput',
  templateUrl: './searchinput.component.html',
  styleUrls: ['./searchinput.component.scss']
})
export class SearchinputComponent {

  searchTerm!:string;
  currentPage= 1;
  constructor(private route: ActivatedRoute,private router :Router,private searchService:SearchTermService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // Retrieve the value of 'q' from the query parameters
      this.searchTerm = params['q'];
      console.log('Retrieved value:', this.searchTerm);
    });
    
    if(!this.searchTerm){

   
    this.searchService.getSearchTerm().subscribe(term => {
      this.searchTerm = term;
    });
  }
  }

  navigateToSearch() {
    this.searchService.setSearchTerm(this.searchTerm);
    console.log('Entered value:', this.searchTerm);
    this.router.navigate(['/search'], { 
      queryParams: { 
        q: this.searchTerm,
        page: this.currentPage  // Include the currentPage as a query parameter
      } 
    });
  }
  
}

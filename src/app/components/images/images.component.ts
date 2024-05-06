import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleAPIService } from 'src/app/services/google-api.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  // @Input() searchTerm: any;
  dataArray: any;
  cardsArray: any[] = Array(10).fill(0);
  searchTerm: any;
  currentPage = 1;

  constructor(
    private route: ActivatedRoute,
    private googleApi: GoogleAPIService
  ) {}

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

  fetchData(searchalue: any, pageIndex: any) {
    this.googleApi.searchImages(searchalue, pageIndex).subscribe(
      (response) => {
        console.log(response);
        this.dataArray = response.items;
        // Here you can process the response data as needed
      },
      (error) => {
        console.error(error);
      }
    );
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    // this.searchLinks();
    this.searchImages();
  }
  searchImages() {
    this.fetchData(this.searchTerm, this.currentPage * 10 - 9);
  }
}

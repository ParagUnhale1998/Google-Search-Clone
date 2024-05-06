import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageApiService } from 'src/app/services/image-api.service';

@Component({
  selector: 'app-images2',
  templateUrl: './images2.component.html',
  styleUrls: ['./images2.component.scss']
})
export class Images2Component {
  dataArray: any;
  cardsArray: any[] = Array(10).fill(0);
  searchTerm: any;
  currentPage = 1;
  images: any[] = [];
  startIndex:any
  visibleDataCount: number = 10;

  
  constructor(
    private route: ActivatedRoute,
    private imageApi: ImageApiService
  ) {

   
  }

  ngOnInit(): void {
    // this.fetchData(this.searchTerm, this.currentPage);
    this.route.queryParams.subscribe((params) => {
      // Retrieve the value of 'q' from the query parameters
      this.searchTerm = params['q'];
      this.startIndex = params['page'] ? +params['page'] : 0;

      console.log('Retrieved value:', this.searchTerm);
      this.fetchData(this.searchTerm, 0);
    });
  }

  fetchData(searchalue: any, pageIndex: any) {
    this.imageApi.searchImages(searchalue, pageIndex).subscribe(
      (response) => {
        console.log(response);
        // this.dataArray = response.items;
        this.images = response.items;
        this.dataArray = response.items;
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

  navigateToLink(linkUrl:any) {
    window.location.href = linkUrl;
  }

  fetchMoreImages() {
    this.currentPage++; // Increment page number
    const startIndex = (this.currentPage - 1) * 10 + 1; // Calculate start index for the next page
    this.imageApi.searchImages(this.searchTerm, startIndex)
      .subscribe((data: any) => {
        this.images = this.images.concat(data.items); // Concatenate new items to existing images array
      });
  }

  showMore() {
    this.visibleDataCount += 10; // Increase by 10 when "Show More" is clicked
  }

}
/* this.images = [
      {
          "title": "WWE - YouTube",
          "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZeRHswFpT_owPjFLGyq5Kimp1B8Wu647ERnyRo7SJUOUzIk&s",
          "originalImageUrl": "https://i.ytimg.com/vi/U-fZLfWbuHE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBMP9LniU5l1Qu8-5q3rfzsK35ifQ",
          "contextLink": "https://www.youtube.com/channel/UCJ5v_MCY6GNUBTO8-D3XoAg",
          "height": 386,
          "width": 686,
          "size": "67KB"
      },
      {
          "title": "WWE - Wikipedia",
          "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKhy3P5s0by5oWYPy1bebiiu-xNkLWjIFxsJrmzP_Oum6hjQ&s",
          "originalImageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c4/WWE_official_logo.svg",
          "contextLink": "https://en.wikipedia.org/wiki/WWE",
          "height": 306,
          "width": 325,
          "size": "4KB"
      },
      {
          "title": "Details On Confirmed Deal For WWE SmackDown To Leave Fox, Return ...",
          "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxPXode4q3nVqBKUuN0Suw3r1BSigBol-uj402-KgzWXXqD0&s",
          "originalImageUrl": "https://www.wrestlinginc.com/img/gallery/details-on-confirmed-deal-for-wwe-smackdown-to-leave-fox-return-to-cable/intro-1695303063.jpg",
          "contextLink": "https://www.wrestlinginc.com/1400275/details-confirmed-deal-wwe-smackdown-leave-fox-return-cable-tv-rights/",
          "height": 438,
          "width": 780,
          "size": "117KB"
      },
      {
          "title": "WWE Day 1 2022 match results after Roman Reigns withdraws with ...",
          "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOg_dSll4HCHWoyWEUcfLhu_g0V83_wiewJ3zq9pPRJjJGMqE&s",
          "originalImageUrl": "https://static.independent.co.uk/2022/01/02/09/newFile-5.jpg",
          "contextLink": "https://www.independent.co.uk/sport/general/wwe-mma-wrestling/wwe-day-1-match-results-b1985489.html",
          "height": 673,
          "width": 897,
          "size": "113KB"
      },
      {
          "title": "B/R Wrestling Awards 2023: Ranking WWE and AEW's Best Moments ...",
          "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgZTPGuOvbJeUKxReOVGq_Njoy3PcsayxjUikunNxzPqnGX1N&s",
          "originalImageUrl": "https://media.bleacherreport.com/image/upload/x_150,y_0,w_1518,h_1013,c_crop/v1703975481/qhfpchzdt3tkeruvnmzl.jpg",
          "contextLink": "https://bleacherreport.com/articles/10103051-br-wrestling-awards-2023-ranking-wwe-and-aews-best-moments",
          "height": 1013,
          "width": 1518,
          "size": "240KB"
      },
      {
          "title": "Hall of WWE Champions: photos | WWE",
          "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjR1_gJr0mwLDGqJ5wKdOS7BwIifTnTWkmxVqOaTlV3sPkoc&s",
          "originalImageUrl": "https://www.wwe.com/f/styles/gallery_img_l/public/all/2022/04/143_Roman_Reigns_HOC--e8e72261e77fccdbd0a1cab9420d9bc6.jpg",
          "contextLink": "https://www.wwe.com/gallery/wwe-champions-photos",
          "height": 1200,
          "width": 1200,
          "size": "306KB"
      },
      {
          "title": "WWE SmackDown 20 Years and Counting",
          "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRC_WtoRfow6qPaKuvluc4e8blPI-XqlF3EmFUBVMZcyyrXk&s",
          "originalImageUrl": "https://m.media-amazon.com/images/I/91-6aoftxRL._AC_UF1000,1000_QL80_.jpg",
          "contextLink": "https://www.amazon.com/WWE-SmackDown-20-Years-Counting/dp/1465483608",
          "height": 1000,
          "width": 833,
          "size": "156KB"
      },
      {
          "title": "WWE | WTRF",
          "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgVk7shgwndT9LfZVEc73iwAiyIom0r6-XDS3ZTzupwDJHN0z&s",
          "originalImageUrl": "https://www.wtrf.com/wp-content/uploads/sites/25/2023/04/wwe-world-wrestling-entertainment.jpg?w=1280&h=720&crop=1",
          "contextLink": "https://www.wtrf.com/wwe/",
          "height": 720,
          "width": 1280,
          "size": "170KB"
      },
      {
          "title": "Wrestling Games | Official WWE 2K Website",
          "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3-7ahyFk76BuQMnFlBATwLsBp0JBsTaTdowfIuYguDLPKtU&s",
          "originalImageUrl": "https://assets.2k.com/1a6ngf98576c/3vArlsNlZYVHgp3ZT6XWLS/999ba35f65bddc82b7ced0c0c9ce0da6/WWE_FRANCHISE-SKU-WWESUPERCARD.jpg",
          "contextLink": "https://wwe.2k.com/",
          "height": 828,
          "width": 828,
          "size": "399KB"
      },
      {
          "title": "Biography: WWE Legends (TV Series 2021– ) - IMDb",
          "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziiO6_oRmOzmo2lU5_vUEy6583iBF99pUxsU1vCEhpE7c_FwB&s",
          "originalImageUrl": "https://m.media-amazon.com/images/M/MV5BZDQzN2ZmMWItYjM1YS00MDBmLTkwOGQtYmIxNGU1YzE4ZWJkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
          "contextLink": "https://www.imdb.com/title/tt14403784/",
          "height": 1763,
          "width": 1175,
          "size": "368KB"
      }
  ]*/

/*[
    {
        "title": "John Cena - Wikipedia",
        "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6yV04RCqKwwC6wF-5WOEhvwVWVEmEo-bo7F6ZMIo2nFYu0VHN&s",
        "originalImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/1200px-John_Cena_July_2018.jpg",
        "contextLink": "https://en.wikipedia.org/wiki/John_Cena",
        "height": 1693,
        "width": 1200,
        "size": "413KB"
    },
    {
        "title": "John Cena | WWE",
        "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5fYTNfHlpZJzO7SqCm3n_ySHsbwKlN6RTp1iC-UO989h_k8RH&s",
        "originalImageUrl": "https://www.wwe.com/f/styles/og_image/public/all/2024/01/Fast_10072023RF_52583--7640f0c55ed8655dfceeb8f3d0a2c7b3.JPG",
        "contextLink": "http://www.wwe.com/superstars/john-cena",
        "height": 675,
        "width": 1200,
        "size": "180KB"
    },
    {
        "title": "John Cena - IMDb",
        "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxc3xSi1cGiJ9sFqQlrfBygjsVoT0AOZp1CFAzDXYRbBMjXHDE&s",
        "originalImageUrl": "https://m.media-amazon.com/images/M/MV5BMTQ5MzkzNTIyN15BMl5BanBnXkFtZTYwNzUzOTA2._V1_FMjpg_UX1000_.jpg",
        "contextLink": "https://www.imdb.com/name/nm1078479/",
        "height": 1498,
        "width": 1000,
        "size": "66KB"
    },
    {
        "title": "John Cena to Return to WWE SmackDown",
        "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgViODfjKQWBTNylUft7jKzrwhhqe5mAFb-eVPMQksalZs68A&s",
        "originalImageUrl": "https://pyxis.nymag.com/v1/imgs/5a5/c75/fa9646c1ddd94a8a42acf920e1123ce488-john-cena.1x.rsquare.w1400.jpg",
        "contextLink": "https://www.vulture.com/2023/08/john-cena-wwe-smackdown.html",
        "height": 1400,
        "width": 1400,
        "size": "309KB"
    },
    {
        "title": "John Cena Talks How He Wants His WWE Story To End",
        "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdtKbCjUupmrMluueTiJCuM11odVR6R5HLniWRXYC_WxTGu4&s",
        "originalImageUrl": "https://www.wrestlezone.com/wp-content/uploads/sites/8/2023/09/john-cena-3.jpeg?w=1024",
        "contextLink": "https://www.wrestlezone.com/news/1419596-john-cena-on-how-he-wants-his-story-in-wwe-to-end-whatever-is-best-for-wwe",
        "height": 576,
        "width": 1024,
        "size": "88KB"
    },
    {
        "title": "Q&A: Actor John Cena makes time for wrestling, Hollywood | The ...",
        "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvtQ3haTpwCB82WxgCINWTjVHn5r4pKEUunTkI9sCjNgT3-I&s",
        "originalImageUrl": "https://static.independent.co.uk/2023/03/14/08/BC_WRE_Film-Q%26amp%3BA-Cena_38816.jpg",
        "contextLink": "https://www.independent.co.uk/news/john-cena-ap-wwe-vince-mcmahon-perseverance-b2300332.html",
        "height": 2333,
        "width": 3500,
        "size": "1.0MB"
    },
    {
        "title": "John Cena (Actor, Wrestler)",
        "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttVkG9IO0tnShirOBcjZSseH3NBjPxeE5ECWcI9l9kvgO8rzA&s",
        "originalImageUrl": "https://variety.com/wp-content/uploads/2024/01/john-cena.jpg?w=1000",
        "contextLink": "https://variety.com/t/john-cena/",
        "height": 563,
        "width": 1000,
        "size": "325KB"
    },
    {
        "title": "John Cena Says He Doesn't Have 'Much Time Left' in WWE (Exclusive)",
        "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSvguiIPEAbFZITyjNlBwRPktR-8MXCYDsZQ_izdVqGwjozbM&s",
        "originalImageUrl": "https://people.com/thmb/j5ho56D-ErGY4uumLXPZJm_lCxA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(677x461:679x463)/John-Cena-Contemplating-Ending-Wresting-Career-tout-2-011624-faefd3ab52f740859751a0168503b53c.jpg",
        "contextLink": "https://people.com/john-cena-contemplating-end-wwe-career-exclusive-8430852",
        "height": 1000,
        "width": 1500,
        "size": "100KB"
    },
    {
        "title": "John Cena | Made up Characters Wiki | Fandom",
        "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYKyVLal1MMF-LEb-e-Kd0FZcCNaZxc_EY5pBbZvkmpWYRTY&s",
        "originalImageUrl": "https://static.wikia.nocookie.net/muc/images/d/df/IMG_0286.jpg/revision/latest?cb=20170319002826",
        "contextLink": "https://muc.fandom.com/wiki/John_Cena",
        "height": 835,
        "width": 600,
        "size": "58KB"
    },
    {
        "title": "John Cena On His WWE Retirement & Final Match: \"I Know It's Soon\"",
        "thumbnailImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzu0wTTjeYEtZ7pDghDnaRcdLHZAWF1bgOcwh11bt3e1TEZq8&s",
        "originalImageUrl": "https://deadline.com/wp-content/uploads/2023/09/john-cena-wwe.jpg?w=681&h=383&crop=1",
        "contextLink": "https://deadline.com/2023/09/john-cena-wwe-retirement-final-match-1235535169/",
        "height": 383,
        "width": 681,
        "size": "37KB"
    }
]*/
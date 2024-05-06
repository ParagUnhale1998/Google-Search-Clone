import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SearchTermService } from 'src/app/services/search-term.service';

@Component({
  selector: 'app-all2',
  templateUrl: './all2.component.html',
  styleUrls: ['./all2.component.scss'],
})
export class All2Component {
  cardsArray: any[] = Array(10).fill(0);
  searchTerm!: string;
  data: any;
  knowledge_panel: any;
  currentPage = 1;
  visibleDataCount: number = 10;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchTermService,
    private googleApi2: ApiService,
    private router: Router
  ) {
    this.searchService.getSearchTerm().subscribe((term) => {
      this.searchTerm = term;
    });
    
   
  }
 
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // Retrieve the value of 'q' from the query parameters
      this.searchTerm = params['q'];
      this.currentPage = params['page'] ? +params['page'] : this.currentPage;

      console.log('Retrieved value:', this.searchTerm);
      this.fetchData2(this.searchTerm, this.currentPage);
    });
  }

  fetchData2(searchValue: any, pageIndex: any) {
    this.googleApi2.search(searchValue, pageIndex).subscribe(
      (response) => {
        console.log(response);
        // Check if response contains data
        if (response.results && response.results.length > 0) {
          this.knowledge_panel = response.knowledge_panel;
          this.data = response.results;
        } else {
          // Handle case when no results are found
          this.data = [];
        }
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
  }

  searchLinks() {
    // this.fetchData2(this.searchTerm, this.currentPage * 10 - 9);
    this.router.navigate(['/search'], {
      queryParams: {
        q: this.searchTerm,
        page: this.currentPage, // Include the currentPage as a query parameter
      },
    });
  }

  getDomain(url: string) {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol + '//' + parsedUrl.hostname;
  }

  showMore() {
    this.visibleDataCount += 10; // Increase by 10 when "Show More" is clicked
  }
}
/*this.data = [
      {
        position: 1,
        url: 'https://www.wwe.com/',
        title: 'WWE News, Results, Photos & Video - Official Site | WWE',
        description:
          'The official home of the latest WWE news, results and events. Get breaking news, photos, and video of your favorite WWE Superstars.',
      },
      {
        position: 2,
        url: 'https://www.youtube.com/channel/UCJ5v_MCY6GNUBTO8-D3XoAg',
        title: 'WWE - YouTube',
        description:
          'WWE on YouTube is your number one spot to catch WWE original shows and exclusives!',
      },
      {
        position: 3,
        url: 'https://twitter.com/wwe?lang=en',
        title: 'WWE - X.com',
        description: 'The official X account of @WWE and its fans worldwide!',
      },
      {
        position: 4,
        url: 'https://www.instagram.com/wwe/?hl=en',
        title: 'WWE (@wwe) • Instagram photos and videos',
        description:
          'The official Instagram of WWE and its Superstars; featuring the latest breaking news, photos, features and videos.',
      },
      {
        position: 5,
        url: 'https://www.youtube.com/@WWE',
        title: 'WWE - YouTube',
        description:
          'WWE on YouTube is your number one spot to catch WWE original shows and exclusives!Watch videos from all of your favorite WWE Superstars, backstage fallout ...',
      },
      {
        position: 6,
        url: 'https://en.wikipedia.org/wiki/WWE',
        title: 'WWE - Wikipedia',
        description:
          'World Wrestling Entertainment (WWE) is an American professional wrestling promotion. It is owned and operated by TKO Group Holdings, a majority-owned ...',
      },
      {
        position: 7,
        url: 'https://www.forbes.com/sites/alfredkonuwa/2024/05/04/wwe-backlash-2024-results-winners-and-grades-from-france/',
        title: 'WWE Backlash 2024 Results, Winners And Grades From France',
        description:
          'WWE Backlash 2024 results, winners and grades with AJ Styles vs. Cody Rhodes in the main event.',
      },
      {
        position: 8,
        url: 'https://wwe.2k.com/',
        title: 'Wrestling Games | Official WWE 2K Website',
        description:
          'WWE 2K, is a series of professional wrestling sports simulation video games that launched in 2000. Browse the WWE 2K Franchise here.',
      },
      {
        position: 9,
        url: 'https://www.facebook.com/wwe/',
        title: 'WWE - Facebook',
        description:
          'The official Facebook home of WWE and our worldwide fans that make up the WWE Universe. WWE.com. 󱙶. Follow. 󰟝. Posts.',
      },
      {
        position: 10,
        url: 'https://www.espn.com/wwe/',
        title: 'WWE News, Video - ESPN',
        description:
          "WrestleMania 40 Night 1 results: The Rock and Roman Reigns defeat Cody Rhodes, Seth Rollins. It's time for the biggest night on the WWE calendar. Follow along ...",
      },
      {
        position: 11,
        url: 'https://www.tiktok.com/@wwe?lang=en',
        title: 'WWE (@wwe) Official - TikTok',
        description:
          'WWE (@wwe) on TikTok | 721.8M Likes. 27M Followers. The official TikTok channel of WWE!Watch the latest video from WWE (@wwe).',
      },
      {
        position: 12,
        url: 'https://www.cagesideseats.com/2024/5/6/24149873/rumor-roundup-may-1-2024-new-wwe-faction-wrestlemania-41-location-tanga-loa-deal-bloodline',
        title: 'Rumor Roundup: New WWE faction, WrestleMania 41 location ...',
        description:
          'The latest rumors, including the word on a new faction coming to WWE, why WrestleMania 41 ended up in Las Vegas, when Tanga Loa signed, ...',
      },
      {
        position: 13,
        url: 'https://www.youtube.com/watch?v=h0pt6GYQfEY',
        title: 'A&E WWE Rivals John Cena vs. Batista - YouTube',
        description:
          'John Cena and Batista reunite and reminisce about their incredible journey from unknown rookies ...',
      },
      {
        position: 14,
        url: 'https://bleacherreport.com/articles/10119901-updated-wwe-king-and-queen-of-the-ring-match-card-predictions-after-backlash-results',
        title:
          'Updated WWE King and Queen of the Ring Match Card Predictions ...',
        description:
          'Hot on the heels of one international premium live event, WWE returns to Jeddah, Saudi Arabia on May 25 for the King and Queen of the Ring ...',
      },
      {
        position: 15,
        url: 'https://sports.yahoo.com/live/wwe-backlash-france-2024-results-grades-and-analysis-cody-rhodes-defeats-aj-styles-in-first-title-defense-160123952.html',
        title: 'WWE Backlash France 2024 results, grades and analysis',
        description:
          "The Lyon, France crowd was electric start-to-finish in WWE's first major event since WrestleMania 40.",
      },
      {
        position: 16,
        url: 'https://www.youtube.com/watch?v=mN4XawxSuL8',
        title: 'Damian Priest, Bayley and more recap WWE Backlash France',
        description:
          'Damian Priest, Bayley, and more recap an epic WWE Backlash France on the latest edition of ...',
      },
      {
        position: 17,
        url: 'https://www.independent.co.uk/topic/wwe',
        title:
          'WWE - latest news, breaking stories and comment - The Independent',
        description:
          'The latest breaking news, comment and features from The Independent.',
      },
      {
        position: 18,
        url: 'https://www.wrestlinginc.com/category/wwe-news/',
        title: 'WWE News - Wrestling Inc.',
        description:
          'Get the latest WWE news, including the latest headlines, rumors, and injuries in the world of wrestling.',
      },
      {
        position: 19,
        url: 'https://www.foxsports.com/wwe',
        title: 'WWE News & Rumors - FOX Sports',
        description:
          "WWE NEWS · The creative nightmare that is Cody Rhodes' dream matches · Seth Rollins debuts new look at Kentucky Derby with Becky Lynch · Sky Sports Action Live ...",
      },
      {
        position: 20,
        url: 'https://wwe.2k.com/2k23/',
        title: 'The Official Home of WWE 2K23 - WWE 2K23',
        description:
          'WWE 2K23 ROSTER. The WWE Universe is filled with a diverse cast of Superstars, ranging in all shapes and sizes. From emerging NXT talent, to Legends, and ...',
      },
      {
        position: 21,
        url: 'https://www.sportskeeda.com/wwe',
        title: 'Latest WWE News - Sportskeeda',
        description:
          'Stay on top of the latest WWE wrestling news, results, rumors, and analysis with Sportskeeda. Our team of experts provides exclusive insights and opinions ...',
      },
      {
        position: 22,
        url: 'https://www.dailymail.co.uk/sport/wwe/index.html',
        title: 'WWE Smackdown and RAW News including Wrestlers and Results',
        description:
          'Get the latest WWE 2018 news for Royal Rumble, RAW and Smackdown plus more on winners and wrestlers including Ronda Rousey, Paige, Carmella and champions.',
      },
      {
        position: 23,
        url: 'https://www.cbssports.com/wwe/',
        title: 'WWE - News, Rumors, Results, and Videos - CBSSports.com',
        description:
          'WrestleMania 41 set for Las Vegas in April 2025 · Rollins joins McIntyre in re-signing with WWE, per report · Mahomes appears on Raw, confronts Braun Strowman.',
      },
      {
        position: 24,
        url: 'https://prowrestling.fandom.com/wiki/WWE',
        title: 'WWE - Pro Wrestling Wiki - Fandom',
        description:
          'WWE holds an extensive library of videos, representing a significant portion of the visual history of professional wrestling. The company began as the Capitol ...',
      },
      {
        position: 25,
        url: 'https://www.marca.com/en/wwe.html',
        title: 'Wrestling News - Latest WWE News, Stats & Updates - Marca.com',
        description:
          'WWE · Patrick Mahomes teams up with Logan Paul and IShowSpeed for an epic training session that surprises fans · Uncertainty Grips WrestleMania 41: WWE Eyes Las ...',
      },
      {
        position: 26,
        url: 'https://www.thesun.co.uk/sport/wwe/',
        title: 'WWE News - Latest WWE Raw Results, Fights & Rumours - The Sun',
        description:
          'Latest WWE news and results from Royal Rumble, WrestleMania, Summer Slam and more wrestling updates from The Sun.',
      },
      {
        position: 27,
        url: 'https://www.youtube.com/watch?v=XE1kHomVf3w',
        title: 'Cody Rhodes vs Aj Styles Full Match - WWE Backlash 5/4/24',
        description:
          'Undisputed Championship - Cody Rhodes vs Aj Styles Full Match - WWE Backlash 5/4/24. 124K ...',
      },
      {
        position: 28,
        url: 'https://www.givemesport.com/tag/wwe/',
        title: 'WWE News - GiveMeSport',
        description:
          'Two WWE Superstars Exposed During Backstage Segment on Raw. Dominik Mysterio and Liv Morgan have been found out and exposed by the WWE Universe after being ...',
      },
      {
        position: 29,
        url: 'https://open.spotify.com/artist/0spHbv2fw49lDMkbOAdaqX',
        title: 'WWE - Spotify',
        description: 'Listen to WWE on Spotify. Artist · 2.9M monthly listeners.',
      },
      {
        position: 30,
        url: 'https://www.f4wonline.com/',
        title: 'WON/F4W - WWE news, Pro Wrestling News, WWE Results, AEW ...',
        description:
          'WON/F4W - WWE news, Pro Wrestling News, WWE Results, AEW News, AEW results.',
      },
      {
        position: 31,
        url: 'https://en.wikipedia.org/wiki/List_of_WWE_personnel',
        title: 'List of WWE personnel - Wikipedia',
        description:
          'WWE is an American professional wrestling promotion based in Stamford, Connecticut. It is owned and operated by TKO Group Holdings, a majority owned ...',
      },
      {
        position: 32,
        url: 'https://www.the-sun.com/sport/wwe/',
        title: 'WWE - news, fights, results | The Sun US',
        description: 'Latest WWE news and results from The Sun US.',
      },
      {
        position: 33,
        url: 'https://www.youtube.com/watch?v=r5qZothUUYs',
        title: 'Top 10 Friday Night SmackDown moments: WWE Top 10, May 3, 2024',
        description:
          '... WWE for more exciting action! - Subscribe to WWE on YouTube: http://wwe.yt/ - ... wwe ...',
      },
      {
        position: 34,
        url: 'https://www.wrestleview.com/',
        title: 'Wrestleview.com - WWE News, WWE Results, AEW News, AEW ...',
        description:
          'WWE Backlash France Results – 5/4/24 (Cody Rhodes vs. · TNA Wrestling Under Siege Quick Results – 5/3/24 (6-Man Tag, Title Matches And More!) · WWE SmackDown ...',
      },
      {
        position: 35,
        url: 'https://play.google.com/store/apps/details?id=com.wwe.universe&hl=en_US&gl=US',
        title: 'WWE - Apps on Google Play',
        description:
          'Download the WWE app for the latest news, announcements, results and more!',
      },
      {
        position: 36,
        url: 'https://www.usanetwork.com/wwe-raw',
        title: 'WWE Raw - USANetwork.com',
        description:
          'Find WWE Monday Night Raw on USANetwork.com and the USA App. Huge personalities of professional wrestling square off in the ring and behind the scenes.',
      },
      {
        position: 37,
        url: 'https://www.ringsidenews.com/',
        title: 'Ringside News: Wrestling News | WWE News and Rumors',
        description:
          'Your one-stop source for WWE news and rumors. The latest wrestling news and rumors, WWE spoilers, WWE rumors & more coverage for over a decade.',
      },
      {
        position: 38,
        url: 'https://wrestlingnews.co/wwe-news',
        title: 'Wrestling News | WWE and AEW Results, Spoilers, Rumors & Scoops',
        description:
          'WWE News · Ric Flair Says He Was Kicked Out Of A Restaurant After An Issue With The Kitchen Manager · WWE Star Allegedly Was A Bully At NXT, Was Reprimanded By ...',
      },
      {
        position: 39,
        url: 'https://www.cagesideseats.com/wwe',
        title: 'WWE - Cageside Seats',
        description:
          "WWE · Dominant champs could help the women's tag division · Tweets of the Week: Cardona cigar genius, McIntyre insulting Michael Cole, more! · Cageside ...",
      },
      {
        position: 40,
        url: 'https://www.sescoops.com/',
        title: 'SEScoops | WWE News, Wrestling Analysis, Event Coverage ...',
        description:
          'Wrestling news, results and exclusive interviews covering WWE, All Elite Wrestling (AEW), New Japan and more. Founded in 2002.',
      },
      {
        position: 41,
        url: 'https://giphy.com/wwe',
        title: 'Be Animated - WWE GIFs on GIPHY',
        description:
          'Jump off the top rope and into a trove of WWE GIFs featuring your favorite WWE moments, matches and Superstars — past and present — including John Cena, ...',
      },
      {
        position: 42,
        url: 'https://www.linkedin.com/company/world-wrestling-entertainment',
        title: 'WWE - LinkedIn',
        description:
          'WWE | 103884 followers on LinkedIn. WWE, a publicly traded company (NYSE: WWE), is a multi-faceted media organization and recognized leader in global ...',
      },
      {
        position: 43,
        url: 'https://apps.apple.com/us/app/wwe/id551798799',
        title: 'WWE on the App Store',
        description:
          'Read reviews, compare customer ratings, see screenshots, and learn more about WWE. Download WWE and enjoy it on your iPhone, iPad, and iPod touch.',
      },
      {
        position: 44,
        url: 'https://www.youtube.com/watch?v=pDuKDrurPoc',
        title: 'WrestleMania 41 is heading to Las Vegas on April 19 & 20, 2025',
        description:
          "WWE's Chief Content Officer Paul “Triple H” Levesque asks the WWE Universe if they're ready ...",
      },
      {
        position: 45,
        url: 'https://www.reddit.com/r/WWE/',
        title: 'r/WWE - Reddit',
        description:
          'r/WWE: Welcome to r/WWE A SubReddit to discuss WWE, NXT, ECW, and WCW. If you are new, check out the WWE Wiki for answers to many common questions…',
      },
      {
        position: 46,
        url: 'https://books.google.com/books?id=Ps5CDwAAQBAJ&pg=PA2016-IA57&lpg=PA2016-IA57&dq=wwe&source=bl&ots=M15wnFnNlg&sig=ACfU3U3cDSatVxcXxu_fO571z4M0vwkTzg&hl=en',
        title: 'Focus On: 100 Most Popular WWE Hall of Fame',
        description:
          '... WWE. August 29, 1988. Archived from the original "The Rarely Seen Hulk Hogan Fist Helmet– Boston, MA 9/10/88" "John Cena Debuting New Attire Tonight, Hulk ...',
      },
      {
        position: 47,
        url: 'https://www.peacocktv.com/sports/wwe',
        title: 'Stream WWE LIVE - Peacock',
        description:
          'Peacock is the LIVE streaming home of WWE. Watch every Live Event, every episode of RAW, SmackDown, and NXT; WWE documentaries and originals; and more.',
      },
      {
        position: 48,
        url: 'https://books.google.com/books?id=YLXmDwAAQBAJ&pg=PA318&lpg=PA318&dq=wwe&source=bl&ots=B-Yq8N4xC1&sig=ACfU3U3lrvWVumKF9xz9pBnGK-TGGB6GXA&hl=en',
        title: 'WWE Encyclopedia of Sports Entertainment New Edition',
        description:
          "... WWE Wrestling Challenge, while also teaming with the legendary Lord Alfred Hayes to host many of WWE's popular Coliseum Home Video releases. Prior to ...",
      },
      {
        position: 49,
        url: 'https://www.foxnews.com/category/organization/wwe',
        title: 'WWE - Fox News',
        description:
          'World Wrestling Entertainment, primarily known for professional wrestling, has launched the careers of many famous athletes and stars like John Cena, ...',
      },
    ];
  
    this.knowledge_panel = {
      name: 'WWE',
      label: 'Production company',
      description: {
        text: 'World Wrestling Entertainment is an American professional wrestling promotion. It is owned and operated by TKO Group Holdings, a majority-owned subsidiary of Endeavor Group Holdings.',
        url: 'https://en.wikipedia.org/wiki/WWE',
        site: 'Wikipedia',
      },
      image: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:tsL9AEArFLgeUM',
        width: 235,
        height: 215,
        page_url: 'https://en.wikipedia.org/wiki/WWE',
      },
      info: [
        {
          title: 'Founders',
          labels: ['Vince McMahon', 'Linda McMahon'],
        },
        {
          title: 'Parent organizations',
          labels: ['TKO Group Holdings Inc', 'TKO Operating Company, LLC'],
        },
        {
          title: 'Founded',
          labels: ['February 1980, South Yarmouth, Yarmouth, MA'],
        },
        {
          title: 'Headquarters',
          labels: ['Stamford, CT'],
        },
      ],}*/
/*this.data =[
      {
          "position": 1,
          "url": "https://www.wwe.com/",
          "title": "WWE News, Results, Photos & Video - Official Site | WWE",
          "description": "The official home of the latest WWE news, results and events. Get breaking news, photos, and video of your favorite WWE Superstars."
      },
      {
          "position": 2,
          "url": "https://twitter.com/wwe?lang=en",
          "title": "WWE - X.com",
          "description": "The official X account of @WWE and its fans worldwide!"
      },
      {
          "position": 3,
          "url": "https://www.youtube.com/channel/UCJ5v_MCY6GNUBTO8-D3XoAg",
          "title": "WWE - YouTube",
          "description": "WWE on YouTube is your number one spot to catch WWE original shows and exclusives!"
      },
      {
          "position": 4,
          "url": "https://www.youtube.com/@WWE",
          "title": "WWE - YouTube",
          "description": "WWE on YouTube is your number one spot to catch WWE original shows and exclusives!Watch videos from all of your favorite WWE Superstars, backstage fallout ..."
      },
      {
          "position": 5,
          "url": "https://www.instagram.com/wwe/?hl=en",
          "title": "WWE (@wwe) • Instagram photos and videos",
          "description": "The official Instagram of WWE and its Superstars; featuring the latest breaking news, photos, features and videos."
      },
      {
          "position": 6,
          "url": "https://en.wikipedia.org/wiki/WWE",
          "title": "WWE - Wikipedia",
          "description": "World Wrestling Entertainment (WWE) is an American professional wrestling promotion. It is owned and operated by TKO Group Holdings, a majority-owned ..."
      },
      {
          "position": 7,
          "url": "https://www.forbes.com/sites/alfredkonuwa/2024/05/04/wwe-backlash-2024-results-winners-and-grades-from-france/",
          "title": "WWE Backlash 2024 Results, Winners And Grades From France",
          "description": "WWE Backlash 2024 results, winners and grades with AJ Styles vs. Cody Rhodes in the main event."
      },
      {
          "position": 8,
          "url": "https://wwe.2k.com/",
          "title": "Wrestling Games | Official WWE 2K Website",
          "description": "WWE 2K, is a series of professional wrestling sports simulation video games that launched in 2000. Browse the WWE 2K Franchise here."
      },
      {
          "position": 9,
          "url": "https://bleacherreport.com/wwe",
          "title": "WWE | News, Scores, Highlights, Stats, Standings, and Rumors",
          "description": "Be the best WWE fan you can be with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights, scores and more."
      },
      {
          "position": 10,
          "url": "https://www.facebook.com/wwe/",
          "title": "WWE - Facebook",
          "description": "WWE, Stamford, Connecticut. 42577267 likes · 2257992 talking about this. The official Facebook home of WWE and our worldwide fans that make up the..."
      }
  ]*/

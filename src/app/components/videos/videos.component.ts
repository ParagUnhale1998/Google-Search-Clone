import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoApiService } from 'src/app/services/video-api.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  cardsArray: any[] = Array(10).fill(0);
  searchTerm: any;
  videosArray: any;

  constructor(
    private route: ActivatedRoute,
    private videoApi: VideoApiService
  ) {
   
  }

  ngOnInit(): void {
    // this.fetchData(this.searchTerm, this.currentPage);
    this.route.queryParams.subscribe((params) => {
      // Retrieve the value of 'q' from the query parameters
      this.searchTerm = params['q'];

      console.log('Retrieved value:', this.searchTerm);
      this.fetchData(this.searchTerm);
    });
  }

  fetchData(searchalue: any) {
    this.videoApi.searchVideos(searchalue).subscribe(
      (response) => {
        console.log(response);
        this.videosArray = response.videos;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getEmbedLink(link: string): string {
    const videoId = this.getYoutubeVideoId(link);
    return `https://www.youtube.com/embed/${videoId}`;
  }

  getYoutubeVideoId(link: string): string {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = link.match(regExp);
    if (match && match[2].length === 11) {
      return match[2];
    } else {
      return 'Invalid video link';
    }
  }
}

/*
  items = [
    {
      description:
        'Changes Out Now: https://justinbieber.lnk.to/Changes Follow Justin: http://facebook.com/justinbieber http://twitter.com/justinbieber ...',
      duration: '3:51',
      id: '8EJ3zbKTWQ8',
      link: 'https://www.youtube.com/watch?v=8EJ3zbKTWQ8',
      thumbnail:
        'https://i.ytimg.com/vi/8EJ3zbKTWQ8/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAUi04-Pq8KGONBi6bIjg2hu1hQxA',
      title: 'Justin Bieber - Yummy (Official Video)',
      type: 'video',
      uploaded_at: '5 months ago',
      views: 411969057,
    },
    {
      description:
        'Changes Out Now: https://justinbieber.lnk.to/Changes Follow Justin: http://facebook.com/justinbieber http://twitter.com/justinbieber ...',
      duration: '3:51',
      id: '8EJ3zbKTWQ8',
      link: 'https://www.youtube.com/watch?v=8EJ3zbKTWQ8',
      thumbnail:
        'https://i.ytimg.com/vi/8EJ3zbKTWQ8/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAUi04-Pq8KGONBi6bIjg2hu1hQxA',
      title: 'Justin Bieber - Yummy (Official Video)',
      type: 'video',
      uploaded_at: '5 months ago',
      views: 411969057,
    },
    {
      description:
        'Changes Out Now: https://justinbieber.lnk.to/Changes Follow Justin: http://facebook.com/justinbieber http://twitter.com/justinbieber ...',
      duration: '3:51',
      id: '8EJ3zbKTWQ8',
      link: 'https://www.youtube.com/watch?v=8EJ3zbKTWQ8',
      thumbnail:
        'https://i.ytimg.com/vi/8EJ3zbKTWQ8/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAUi04-Pq8KGONBi6bIjg2hu1hQxA',
      title: 'Justin Bieber - Yummy (Official Video)',
      type: 'video',
      uploaded_at: '5 months ago',
      views: 411969057,
    },
    {
      description:
        'Changes Out Now: https://justinbieber.lnk.to/Changes Follow Justin: http://facebook.com/justinbieber http://twitter.com/justinbieber ...',
      duration: '3:51',
      id: '8EJ3zbKTWQ8',
      link: 'https://www.youtube.com/watch?v=8EJ3zbKTWQ8',
      thumbnail:
        'https://i.ytimg.com/vi/8EJ3zbKTWQ8/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAUi04-Pq8KGONBi6bIjg2hu1hQxA',
      title: 'Justin Bieber - Yummy (Official Video)',
      type: 'video',
      uploaded_at: '5 months ago',
      views: 411969057,
    },
  ];
*/
/* this.videosArray = [
      {
        id: 'fyrrfGZc1vU',
        title: 'Top 10 moments from Backlash France: WWE Top 10, May 4, 2024',
        link: 'https://youtu.be/fyrrfGZc1vU',
        thumbnail: 'https://i.ytimg.com/vi/fyrrfGZc1vU/hqdefault.jpg',
        channel: {
          id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
          name: 'WWE',
          link: 'https://www.youtube.com/@WWE',
          handle: '@WWE',
          verified: true,
          thumbnail:
            'https://yt3.ggpht.com/ytc/AIdro_l_OSNIqmZl3fxa94UvP_PT3oiqcZfFH-aFKM4pc_StNISz=s0?imgmax=0',
        },
        description:
          'Relive all the incredible moments from Backlash France. Catch WWE action on Peacock, WWE Network, FOX, USA Network, Sony ...',
        views: 798391,
        uploaded: 'vor 1 Tag',
        duration: 490,
        durationString: '8:10',
      },
      {
        id: 'cTn3kPO5Qdw',
        title:
          'W.W.E__Bαcklαsh__5th May 2024__Full Show__Highlights HD - Bitcoin Currency Popular Show',
        link: 'https://youtu.be/cTn3kPO5Qdw',
        thumbnail: 'https://i.ytimg.com/vi/cTn3kPO5Qdw/hqdefault.jpg',
        channel: {
          id: 'UClfTEQyX8flrgjNbS28Cb0g',
          name: 'Kas(Kastiel)',
          link: 'https://www.youtube.com/@dinonodin',
          handle: '@dinonodin',
          verified: false,
          thumbnail:
            'https://yt3.ggpht.com/SL8SBow0A6FxcY8BWZ2famkxSfngdck74IOrbhygzDg052ydy_Q8445Vuny5Tw2LADdP9v7FgS8=s0?imgmax=0',
        },
        description: 'Bitcoin Currency Popular Show.',
        views: 92054,
        uploaded: 'vor 1 Tag',
        duration: 4292,
        durationString: '1:11:32',
      },
      {
        id: 'r5qZothUUYs',
        title: 'Top 10 Friday Night SmackDown moments: WWE Top 10, May 3, 2024',
        link: 'https://youtu.be/r5qZothUUYs',
        thumbnail: 'https://i.ytimg.com/vi/r5qZothUUYs/hqdefault.jpg',
        channel: {
          id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
          name: 'WWE',
          link: 'https://www.youtube.com/@WWE',
          handle: '@WWE',
          verified: true,
          thumbnail:
            'https://yt3.ggpht.com/ytc/AIdro_l_OSNIqmZl3fxa94UvP_PT3oiqcZfFH-aFKM4pc_StNISz=s0?imgmax=0',
        },
        description:
          "Look back at this week's Friday Night SmackDown to revisit the show's most shocking, exciting, and incredible moments, ...",
        views: 513496,
        uploaded: 'vor 1 Tag',
        duration: 501,
        durationString: '8:21',
      },
      {
        id: 'EUFrJA3CLOM',
        title:
          'WWE BACKLASH in 3 Minuten | TITELWECHSEL! DEBÜT! CROWD WENT NUTS! 04.05.24',
        link: 'https://youtu.be/EUFrJA3CLOM',
        thumbnail: 'https://i.ytimg.com/vi/EUFrJA3CLOM/hqdefault.jpg',
        channel: {
          id: 'UCdsHMu1VHhZ8SlrdUQa457w',
          name: 'Spotfight Wrestling News',
          link: 'https://www.youtube.com/@SpotfightWrestlingNews',
          handle: '@SpotfightWrestlingNews',
          verified: false,
          thumbnail:
            'https://yt3.ggpht.com/WewMhq9m4SgHYZeA7-SO4Ke-nVkjI7iryN3KoVaKwr9ecMDHDBiyB0zj4zD49GEi-hSwChFR=s0?imgmax=0',
        },
        description:
          'Wrestling Livestreams auf https://www.twitch.tv/SpotfightDE Sichere dir exklusive Vorteile (+Podcasts) und unterstütze das Projekt ...',
        views: 4817,
        uploaded: 'vor 23 Stunden',
        duration: 218,
        durationString: '3:38',
      },
      {
        id: 'tWC_Vkj5J9s',
        title: 'Full WWE Backlash France highlights',
        link: 'https://youtu.be/tWC_Vkj5J9s',
        thumbnail: 'https://i.ytimg.com/vi/tWC_Vkj5J9s/hqdefault.jpg',
        channel: {
          id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
          name: 'WWE',
          link: 'https://www.youtube.com/@WWE',
          handle: '@WWE',
          verified: true,
          thumbnail:
            'https://yt3.ggpht.com/ytc/AIdro_l_OSNIqmZl3fxa94UvP_PT3oiqcZfFH-aFKM4pc_StNISz=s0?imgmax=0',
        },
        description:
          'Relive the most electric moments from WWE Backlash France featuring Cody Rhodes, Bianca Belair & Jade Cargill, Damian ...',
        views: 733447,
        uploaded: 'vor 1 Tag',
        duration: 769,
        durationString: '12:49',
      },
      {
        id: '_fM_ISdTsns',
        title:
          'Damian Priest vs. Jey Uso – World Heavyweight Title Match: WWE Backlash highlights, May 4, 2024',
        link: 'https://youtu.be/_fM_ISdTsns',
        thumbnail: 'https://i.ytimg.com/vi/_fM_ISdTsns/hqdefault.jpg',
        channel: {
          id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
          name: 'WWE',
          link: 'https://www.youtube.com/@WWE',
          handle: '@WWE',
          verified: true,
          thumbnail:
            'https://yt3.ggpht.com/ytc/AIdro_l_OSNIqmZl3fxa94UvP_PT3oiqcZfFH-aFKM4pc_StNISz=s0?imgmax=0',
        },
        description:
          'Damian Priest and Jey Uso push themselves to the absolute limit, as The Judgment Day upend the battle for the World ...',
        views: 523374,
        uploaded: 'vor 1 Tag',
        duration: 306,
        durationString: '5:06',
      },
      {
        id: 'fbLv_V8hohw',
        title:
          'Amazing crowd moments from Backlash France Weekend in Lyon: WWE Backlash France highlights',
        link: 'https://youtu.be/fbLv_V8hohw',
        thumbnail: 'https://i.ytimg.com/vi/fbLv_V8hohw/hqdefault.jpg',
        channel: {
          id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
          name: 'WWE',
          link: 'https://www.youtube.com/@WWE',
          handle: '@WWE',
          verified: true,
          thumbnail:
            'https://yt3.ggpht.com/ytc/AIdro_l_OSNIqmZl3fxa94UvP_PT3oiqcZfFH-aFKM4pc_StNISz=s0?imgmax=0',
        },
        description:
          'The WWE Universe in Lyon showed out in big way for a record-breaking SmackDown and Backlash France. Catch WWE action ...',
        views: 615440,
        uploaded: 'vor 1 Tag',
        duration: 766,
        durationString: '12:46',
      },
      {
        id: '0lAd0DMl40A',
        title:
          'Randy Orton & Kevin Owens vs. Solo Sikoa & Tama Tonga: WWE Backlash France highlights, May 4, 2024',
        link: 'https://youtu.be/0lAd0DMl40A',
        thumbnail: 'https://i.ytimg.com/vi/0lAd0DMl40A/hqdefault.jpg',
        channel: {
          id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
          name: 'WWE',
          link: 'https://www.youtube.com/@WWE',
          handle: '@WWE',
          verified: true,
          thumbnail:
            'https://yt3.ggpht.com/ytc/AIdro_l_OSNIqmZl3fxa94UvP_PT3oiqcZfFH-aFKM4pc_StNISz=s0?imgmax=0',
        },
        description:
          'A chaotic start to the night leads to Nick Aldis declaring a Street Fight between Randy Orton & Kevin Owens and The Bloodline in ...',
        views: 655869,
        uploaded: 'vor 1 Tag',
        duration: 328,
        durationString: '5:28',
      },
      {
        id: 'U-fZLfWbuHE',
        title:
          'Cody Rhodes vs. AJ Styles – Undisputed WWE Title Match: WWE Backlash France highlights',
        link: 'https://youtu.be/U-fZLfWbuHE',
        thumbnail: 'https://i.ytimg.com/vi/U-fZLfWbuHE/hqdefault.jpg',
        channel: {
          id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
          name: 'WWE',
          link: 'https://www.youtube.com/@WWE',
          handle: '@WWE',
          verified: true,
          thumbnail:
            'https://yt3.ggpht.com/ytc/AIdro_l_OSNIqmZl3fxa94UvP_PT3oiqcZfFH-aFKM4pc_StNISz=s0?imgmax=0',
        },
        description:
          'The American Nightmare and The Phenomenal One electrify the Lyon crowd in a thrilling clash for the Undisputed WWE Title.',
        views: 522816,
        uploaded: 'vor 1 Tag',
        duration: 216,
        durationString: '3:36',
      },
      {
        id: 'Pwda1PQ5opg',
        title:
          'Bayley vs. Naomi vs. Tiffany Stratton – Triple Threat Match: WWE Backlash highlights, May 4, 2024',
        link: 'https://youtu.be/Pwda1PQ5opg',
        thumbnail: 'https://i.ytimg.com/vi/Pwda1PQ5opg/hqdefault.jpg',
        channel: {
          id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
          name: 'WWE',
          link: 'https://www.youtube.com/@WWE',
          handle: '@WWE',
          verified: true,
          thumbnail:
            'https://yt3.ggpht.com/ytc/AIdro_l_OSNIqmZl3fxa94UvP_PT3oiqcZfFH-aFKM4pc_StNISz=s0?imgmax=0',
        },
        description:
          "Bayley, Naomi and Tiffany Stratton battle for the WWE Women's World Championship in a heated Triple Threat showdown in Lyon ...",
        views: 270753,
        uploaded: 'vor 1 Tag',
        duration: 310,
        durationString: '5:10',
      },
      {
        id: '-ZUAtZO5L48',
        title:
          'WWE Smackdown Highlights Lyon, France May 3, 2024 - WWE Smack down Highlights 5/3/2024 Full Show',
        link: 'https://youtu.be/-ZUAtZO5L48',
        thumbnail: 'https://i.ytimg.com/vi/-ZUAtZO5L48/hqdefault.jpg',
        channel: {
          id: 'UCWKJ2w8vUMqYchDIC2pyDoQ',
          name: 'Long Gym Wrestling',
          link: 'https://www.youtube.com/@LongGymWrestling',
          handle: '@LongGymWrestling',
          verified: true,
          thumbnail:
            'https://yt3.ggpht.com/oT1BkcjNJCgEWaiBbSstReiuGsLDcum2ItzzkNV_MXb8FXttyIf6yh_mvivC0nRrltSJTtXnMw=s0?imgmax=0',
        },
        description:
          'wwe #wweSmackdown2024 #WweRawHighlights WWE RAW Highlights Full HD May 3, 2024 - WWE Monday Night Raw ...',
        views: 77011,
        uploaded: 'vor 1 Tag',
        duration: 2229,
        durationString: '37:09',
      },
      {
        id: 'V8ooWXBvV84',
        title:
          'The Kabuki Warriors vs. Bianca Belair & Jade Cargill: WWE Backlash France highlights, May 4, 2024',
        link: 'https://youtu.be/V8ooWXBvV84',
        thumbnail: 'https://i.ytimg.com/vi/V8ooWXBvV84/hqdefault.jpg',
        channel: {
          id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
          name: 'WWE',
          link: 'https://www.youtube.com/@WWE',
          handle: '@WWE',
          verified: true,
          thumbnail:
            'https://yt3.ggpht.com/ytc/AIdro_l_OSNIqmZl3fxa94UvP_PT3oiqcZfFH-aFKM4pc_StNISz=s0?imgmax=0',
        },
        description:
          "Asuka & Kairi Sane throw down with the superhero-like team of Bianca Belair & Jade Cargill for the WWE Women's Tag Team ...",
        views: 271242,
        uploaded: 'vor 1 Tag',
        duration: 149,
        durationString: '2:29',
      },
      {
        id: 'tKk3VggWNFA',
        title:
          'WWE 5 May 2024 Solo Sikoa Vs Tanga Loa Vs Roman Reigns Vs Tama Tonga Vs All Raw SmackDown',
        link: 'https://youtu.be/tKk3VggWNFA',
        thumbnail: 'https://i.ytimg.com/vi/tKk3VggWNFA/hqdefault.jpg',
        channel: {
          id: 'UCJrEVoHwnE4bXHGnfHj_zVQ',
          name: 'Wrestling Justice',
          link: 'https://www.youtube.com/@wrestlingjustice',
          handle: '@wrestlingjustice',
          verified: true,
          thumbnail:
            'https://yt3.ggpht.com/eEz8gezsk4ETohOpXOTwjOqTfi9O6NEichektS5QS0geHVwTNETzRX5r6Sa3oRTYM0LnXwuw=s0?imgmax=0',
        },
        description:
          'WWE 5 May 2024 Solo Sikoa Vs Tanga Loa Vs Roman Reigns Vs Tama Tonga Vs All Raw SmackDown.',
        views: 198591,
        uploaded: 'vor 1 Tag',
        duration: 1243,
        durationString: '20:43',
      },
      {
        id: '8c8OgbQPWw0',
        title:
          'WWE 5 May 2024 - Brock Lesnar VS. Cody Rhodes VS. Roman Reigns VS. Drew Mcintyre VS. All Smackdown',
        link: 'https://youtu.be/8c8OgbQPWw0',
        thumbnail: 'https://i.ytimg.com/vi/8c8OgbQPWw0/hqdefault.jpg',
        channel: {
          id: 'UCxV44WZkBp65kF4OprkvBFw',
          name: 'ProvisionWrestling',
          link: 'https://www.youtube.com/@provisionwrestling272',
          handle: '@provisionwrestling272',
          verified: true,
          thumbnail:
            'https://yt3.ggpht.com/FQTTeSG0CeEQJDdlBejfUKnOvExZLZnD33C_qJNtmdwBvuy3Dr_PYSXrItc__iz30wigZ0VYGQ=s0?imgmax=0',
        },
        description:
          'WWE 5 May 2024 - Brock Lesnar VS. Cody Rhodes VS. Roman Reigns VS. Drew Mcintyre VS. All Smackdown.',
        views: 22775,
        uploaded: 'vor 1 Tag',
        duration: 805,
        durationString: '13:25',
      },
      {
        id: 'jEzgdKYdgDY',
        title:
          'Dragon Lee attacks Carlito backstage: SmackDown highlights, May 3, 2024',
        link: 'https://youtu.be/jEzgdKYdgDY',
        thumbnail: 'https://i.ytimg.com/vi/jEzgdKYdgDY/hqdefault.jpg',
        channel: {
          id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
          name: 'WWE',
          link: 'https://www.youtube.com/@WWE',
          handle: '@WWE',
          verified: true,
          thumbnail:
            'https://yt3.ggpht.com/ytc/AIdro_l_OSNIqmZl3fxa94UvP_PT3oiqcZfFH-aFKM4pc_StNISz=s0?imgmax=0',
        },
        description:
          'Dragon Lee looks for payback after learning Carlito attacked him to keep him out of WrestleMania. Catch WWE action on Peacock, ...',
        views: 359541,
        uploaded: 'vor 2 Tagen',
        duration: 75,
        durationString: '1:15',
      },
      {
        id: 'XSvPyYGjF9g',
        title:
          'Cody Rhodes vs AJ Styles WWE Championship FULL MATCH - WWE BACKLASH 5/4/2024',
        link: 'https://youtu.be/XSvPyYGjF9g',
        thumbnail: 'https://i.ytimg.com/vi/XSvPyYGjF9g/hqdefault.jpg',
        channel: {
          id: 'UCV__jrd-mcHZbJaw-dvUfYA',
          name: 'Justin Anthony86',
          link: 'https://www.youtube.com/@JustinAnthony86',
          handle: '@JustinAnthony86',
          verified: true,
          thumbnail:
            'https://yt3.ggpht.com/0uaJFLhZsrEw0UBmeoHjOIdIePRZZSswZ5BhCIAEOwmLc_ydDdlzLz9O-KkRcIn2YC-Veiw6=s0?imgmax=0',
        },
        description:
          'romanreigns #wwe #wwechampionship #codyrhodes #fullmatch #wrestlemania #wwelive #wweraw #wwesmackdown #therock ...',
        views: 88732,
        uploaded: 'vor 1 Tag',
        duration: 968,
        durationString: '16:08',
      },
      {
        id: 'oE-FJrU2bSU',
        title: 'Top 10 Monday Night Raw moments: WWE Top 10, April 29, 2024',
        link: 'https://youtu.be/oE-FJrU2bSU',
        thumbnail: 'https://i.ytimg.com/vi/oE-FJrU2bSU/hqdefault.jpg',
        channel: {
          id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
          name: 'WWE',
          link: 'https://www.youtube.com/@WWE',
          handle: '@WWE',
          verified: true,
          thumbnail:
            'https://yt3.ggpht.com/ytc/AIdro_l_OSNIqmZl3fxa94UvP_PT3oiqcZfFH-aFKM4pc_StNISz=s0?imgmax=0',
        },
        description:
          "Look back at Raw to revisit the show's most incredible and exciting moments, presented by Boy Kills World! Catch WWE action on ...",
        views: 1040005,
        uploaded: 'vor 5 Tagen',
        duration: 501,
        durationString: '8:21',
      },
      {
        id: 'YF7YDSmLLeM',
        title: 'Ups & Downs: WWE Backlash 2024 Review',
        link: 'https://youtu.be/YF7YDSmLLeM',
        thumbnail: 'https://i.ytimg.com/vi/YF7YDSmLLeM/hqdefault.jpg',
        channel: {
          id: 'UCq8jp0E99ELBvmBxjJ-JLgA',
          name: 'WhatCulture Wrestling',
          link: 'https://www.youtube.com/@WhatCultureWrestling',
          handle: '@WhatCultureWrestling',
          verified: true,
          thumbnail:
            'https://yt3.ggpht.com/y3SZ9lZo33L8uXQws9VXCupQTK5LZ1yyHScCQVOXtebYB75ISH4YPHHw_FiIzQ4d3Tam92Fqcw=s0?imgmax=0',
        },
        description:
          'Our WWE Backlash 2024 review as Simon Miller talks about Solo Sikoa and Tama Tonga vs Kevin Owens and Randy Orton in a ...',
        views: 74254,
        uploaded: 'vor 18 Stunden',
        duration: 1143,
        durationString: '19:03',
      },
    ];*/
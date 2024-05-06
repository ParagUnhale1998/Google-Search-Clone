import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() data :any ;
  // data = {
  //   name: 'WWE',
  //   label: 'Production company',
  //   description: {
  //     text: 'World Wrestling Entertainment is an American professional wrestling promotion. It is owned and operated by TKO Group Holdings, a majority-owned subsidiary of Endeavor Group Holdings.',
  //     url: 'https://en.wikipedia.org/wiki/WWE',
  //     site: 'Wikipedia',
  //   },
  //   image: {
  //     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:tsL9AEArFLgeUM',
  //     width: 235,
  //     height: 215,
  //     page_url: 'https://en.wikipedia.org/wiki/WWE',
  //   },
  //   info: [
  //     {
  //       title: 'Founders',
  //       labels: ['Vince McMahon', 'Linda McMahon'],
  //     },
  //     {
  //       title: 'Parent organizations',
  //       labels: ['TKO Group Holdings Inc', 'TKO Operating Company, LLC'],
  //     },
  //     {
  //       title: 'Founded',
  //       labels: ['February 1980, South Yarmouth, Yarmouth, MA'],
  //     },
  //     {
  //       title: 'Headquarters',
  //       labels: ['Stamford, CT'],
  //     },
  //   ],
  // };
}

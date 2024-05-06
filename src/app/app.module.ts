import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeheaderComponent } from './components/homeheader/homeheader.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchResultHeaderComponent } from './components/search-result-header/search-result-header.component';
import { SearchinputComponent } from './components/searchinput/searchinput.component';
import { ProfileiconComponent } from './components/profileicon/profileicon.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { TabsComponent } from './components/tabs/tabs.component';
import { ResultOutputComponent } from './components/result-output/result-output.component';
import { AllComponent } from './components/all/all.component';
import { NewsComponent } from './components/news/news.component';
import { ImagesComponent } from './components/images/images.component';
import { VideosComponent } from './components/videos/videos.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { All2Component } from './components/all2/all2.component';
import { Images2Component } from './components/images2/images2.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeheaderComponent,
    HomeComponent,
    FooterComponent,
    PaginationComponent,
    SearchResultHeaderComponent,
    SearchinputComponent,
    ProfileiconComponent,
    SearchResultComponent,
    TabsComponent,
    ResultOutputComponent,
    AllComponent,
    NewsComponent,
    ImagesComponent,
    VideosComponent,
    SidebarComponent,
    All2Component,
    Images2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],  bootstrap: [AppComponent]
})
export class AppModule { }

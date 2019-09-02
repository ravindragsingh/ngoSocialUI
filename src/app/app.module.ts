import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { AboutUsComponent } from './slider/about-us/about-us.component';
import { ProjectsComponent } from './slider/projects/projects.component';
import { EventsComponent } from './slider/events/events.component';
import { NewsComponent } from './slider/news/news.component';
import { LoginComponent } from './slider/login/login.component';
import { RegisterNowComponent } from './slider/register-now/register-now.component';
import { LandingPageComponent } from './slider/login/landing-page/landing-page.component';
import { CharityDetailsComponent } from './slider/login/charity-details/charity-details.component';
import { CompletedCharityComponent } from './slider/login/completed-charity/completed-charity.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    AboutUsComponent,
    ProjectsComponent,
    EventsComponent,
    NewsComponent,
    LoginComponent,
    RegisterNowComponent,
    LandingPageComponent,
    CharityDetailsComponent,
    CompletedCharityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { AboutUsComponent } from './slider/about-us/about-us.component';
import { ProjectsComponent } from './slider/projects/projects.component';
import { EventsComponent } from './slider/events/events.component';
import { NewsComponent } from './slider/news/news.component';
import { LoginComponent } from './slider/login/login.component';
import { RegisterNowComponent } from './slider/register-now/register-now.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    AboutUsComponent,
    ProjectsComponent,
    EventsComponent,
    NewsComponent,
    LoginComponent,
    RegisterNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

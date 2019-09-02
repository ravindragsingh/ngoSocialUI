
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {path:'', component:SliderComponent},
{path: 'register', component:RegisterNowComponent},
{path: 'login', component:LoginComponent},
{path: 'news', component:NewsComponent},
{path: 'events', component:EventsComponent},
{path: 'projects', component:ProjectsComponent},
{path: 'aboutus', component:AboutUsComponent},
{path: 'home', component:LandingPageComponent},
{path: 'details', component:CharityDetailsComponent},
{path: 'completed', component:CompletedCharityComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

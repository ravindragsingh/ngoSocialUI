import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { AboutUsComponent } from './slider/about-us/about-us.component';
import { ProjectsComponent } from './slider/projects/projects.component';
import { EventsComponent } from './slider/events/events.component';
import { NewsComponent } from './slider/news/news.component';
import { LoginComponent } from './slider/login/login.component';
import { RegisterNowComponent } from './slider/register-now/register-now.component';

const routes: Routes = [
  {path:'', component:SliderComponent},
{path: 'register', component:RegisterNowComponent},
{path: 'login', component:LoginComponent},
{path: 'news', component:NewsComponent},
{path: 'events', component:EventsComponent},
{path: 'projects', component:ProjectsComponent},
{path: 'aboutus', component:AboutUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: '', component: HomeComponent }, // Default route
  { path: 'locations', component: LocationComponent } // Route for locations
  //{ path: 'locations', component: LandingPageComponent },
  //{ path: 'location/:id', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
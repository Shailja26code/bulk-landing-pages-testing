import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: 'location/:id', component: LandingPageComponent },
 { path: '', redirectTo: '/location/1', pathMatch: 'full' }
];
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LocationListComponent } from './location-list/location-list.component';
import { AppRoutingModule } from './app-routing.module'; 

@NgModule({
  
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    LocationComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
    HomeComponent,
    LocationComponent,
    FilterPipe,
    LocationListComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
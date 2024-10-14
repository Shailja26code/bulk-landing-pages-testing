// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showLocations: boolean = false;

  toggleLocations() {
    this.showLocations = !this.showLocations;
  }
}
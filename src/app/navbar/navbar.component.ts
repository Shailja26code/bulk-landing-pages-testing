// src/app/navbar/navbar.component.ts

// src/app/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule], // Add this line
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent { 
   // Also add the locations array if it's not already there
   locations: string[] = [
    'Malmo', 'Chicago', 'India',
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'
  ];
  selectedLocation: string = ''; // Add this line

 

  onLocationChange() {
    console.log('Selected location:', this.selectedLocation);
    // Add your logic here to handle location change
  }
}


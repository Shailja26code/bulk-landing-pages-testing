// location.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  locations = [
    { image: 'path/to/image1.jpg', address: '123 Main St, City1', mapUrl: 'https://maps.google.com/?q=123+Main+St,+City1' },
    { image: 'path/to/image2.jpg', address: '456 Elm St, City2', mapUrl: 'https://maps.google.com/?q=456+Elm+St,+City2' },
    // Add more locations as needed
  ];

  searchTerm: string = '';

  onSelect(mapUrl: string) {
    window.open(mapUrl, '_blank');
  }
}
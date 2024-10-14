import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationDataService {
  private locations = [
    { id: 1, name: 'New York', description: 'The Big Apple' },
    { id: 2, name: 'Los Angeles', description: 'City of Angels' },
    { id: 3, name: 'Chicago', description: 'The Windy City' }
  ];

  getLocation(id: number): Observable<any> {
    return of(this.locations.find(loc => loc.id === id));
  }
}
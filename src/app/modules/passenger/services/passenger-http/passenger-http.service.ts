import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PassengerModel} from '../../models/passenger.model';
import {environment} from '../../../../../environments/environment';


const API_USERS_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root',
})
export class PassengerHttpService {
  constructor(private http: HttpClient) {
  }
  getPassengerList(token: string): Observable<any> {
    return this.http.get<PassengerModel>(`${API_USERS_URL}passenger-list`,
    );
  }

}

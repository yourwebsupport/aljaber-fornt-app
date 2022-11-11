import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { PassengerModel } from '../models/passenger.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import {PassengerHttpService} from "./passenger-http/passenger-http.service";

//export type UserType = PassengerModel | undefined;

@Injectable({
  providedIn: 'root',
})
export class PassengerService implements OnDestroy {
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
  private token = "";
  private password = "password";
  // public fields
  currentUser$: Observable<any>;
  isLoading$: Observable<boolean>;
  currentUserSubject: BehaviorSubject<any>;
  isLoadingSubject: BehaviorSubject<boolean>;

  constructor(
    private passengerHttpService: PassengerHttpService,
    private router: Router
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.currentUserSubject = new BehaviorSubject<any>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  // public methods

  getPassengerList(): Observable<any> {
    this.isLoadingSubject.next(true);
    return this.passengerHttpService.getPassengerList(this.token).pipe(
      map((passengerList) => {
         return passengerList;
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  //

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}

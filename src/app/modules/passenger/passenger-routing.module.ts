import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PassengerComponent} from "./passenger.component";
import {PassengerListComponent} from "./components/list/passenger-list.component";

const routes: Routes = [
  {
    path: 'createPassenger',
    component: PassengerComponent,
  },
  {
    path: 'passengerList',
    component: PassengerListComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassengerRoutingModule{}

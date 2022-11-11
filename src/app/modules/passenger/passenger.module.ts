import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PassengerRoutingModule } from './passenger-routing.module';
import {PassengerComponent} from "./passenger.component";
import {PassengerListComponent} from "./components/list/passenger-list.component";
import {MaterialExampleModule} from "../../../material.module";


@NgModule({
  declarations: [
    PassengerComponent,
    PassengerListComponent,
  ],
  imports: [
    CommonModule,
    PassengerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialExampleModule,
  ],
})
export class PassengerModule{}

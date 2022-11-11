import { Component, OnInit ,AfterViewInit,ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import {PassengerModel} from "../../models/passenger.model";
import {PassengerService} from "../../services/passenger.service";

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerListComponent implements AfterViewInit, OnInit {

  pageEvent: PageEvent;

  displayedColumns = ['passengerId', 'passengerPhoto', 'registrationCode', 'passengerName', 'passportNo', 'visaNo', 'registrationDate', 'medicalExamDate',
                      'medicalExamType', 'medicalResultStatusName', 'authorizationStatusName'];

  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private passengerService:PassengerService,  private activatedRoute : ActivatedRoute, private router: Router ) {

  }

  ngOnInit(): void {
    this.passengerService.getPassengerList().subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

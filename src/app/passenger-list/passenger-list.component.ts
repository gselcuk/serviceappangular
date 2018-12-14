import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Shuttle } from '../Shuttle';
import { ShuttleService } from '../shuttle.service';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {
   passengers: string[];
   routeInfo: string;
   shuttle: Shuttle;

  constructor(public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private shuttleService: ShuttleService) { }

  ngOnInit( ) {
   this.shuttle = this.route.snapshot.data['shuttle'];
   this.passengers = (this.shuttle.passengers) ? this.shuttle.passengers : [];
   this.routeInfo = this.shuttle.routeInfo;
  }

  onRemove(passenger: string) {
    const index = this.passengers.indexOf(passenger, 0);
    if (index > -1) {
       this.passengers.splice(index, 1);
    }
    this.assignAndSave();
  }

  private fetchPassengers(): Promise<string[]> {
    return this.shuttleService.getShuttle(this.shuttle.id)
    .then(shuttle => this.passengers = shuttle.passengers);
  }

  private assignAndSave() {
    this.shuttle.passengers = this.passengers;
    this.shuttleService.save(this.shuttle).then(() => this.fetchPassengers());
  }

  add (passengerName: string, passengerLastName: string) {
   this.passengers.push(passengerName.concat(' '.concat(passengerLastName)));
   this.assignAndSave();
  }

}

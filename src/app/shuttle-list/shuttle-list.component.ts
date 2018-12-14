import { Component, OnInit } from '@angular/core';
import {Shuttle} from '../Shuttle';
import { ShuttleService } from '../shuttle.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';


@Component({
  selector: 'app-shuttle-list',
  templateUrl: './shuttle-list.component.html',
  styleUrls: ['./shuttle-list.component.css']
})
export class ShuttleListComponent implements OnInit {
  shuttles: Shuttle[];

  term = new FormControl();

  constructor(private shuttleService: ShuttleService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.shuttles = this.route.snapshot.data['shuttles'];

    this.term.valueChanges.pipe(
      filter(text => text === '' || text.length > 1),
      distinctUntilChanged()
    ).subscribe(text => this.fetchShuttles(text));
  }


  private fetchShuttles(text: string): Promise<Shuttle[]> {
    return this.shuttleService.getShuttles(text)
      .then(shuttles => this.shuttles = shuttles);
  }

  onRemove(shuttle: Shuttle) {
    this.shuttleService.remove(shuttle.id)
      .then(() => this.fetchShuttles(''));
  }
}

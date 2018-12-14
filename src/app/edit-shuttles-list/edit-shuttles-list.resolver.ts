import {Resolve, ActivatedRouteSnapshot} from '@angular/router';


import {Injectable} from '@angular/core';
import { Shuttle } from '../Shuttle';
import { ShuttleService } from '../shuttle.service';

@Injectable()
export class ShuttleResolver implements Resolve<Shuttle> {

  constructor(private shuttleService: ShuttleService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params['id'];
    return id ? this.shuttleService.getShuttle(id) : null;
  }
}

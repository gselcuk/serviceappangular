import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Shuttle } from '../Shuttle';
import { ShuttleService } from '../shuttle.service';
import { Observable } from 'rxjs';

@Injectable()
export class ShuttleListResolver implements Resolve<Shuttle[]> {

  constructor(private shuttleService: ShuttleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Shuttle[]> | Promise<Shuttle[]> | Shuttle[] {
    return this.shuttleService.getShuttles();
  }

}

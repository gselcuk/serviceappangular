import { Injectable } from '@angular/core';
import { Shuttle } from './Shuttle';
import {HttpClient} from '@angular/common/http';

const URL = 'http://localhost:3001/shuttles';

@Injectable()
export class ShuttleService {
  page = 1;
  pageSize = 5;

  constructor(private http: HttpClient) {
  }

  getShuttles(filter = ''): Promise<Shuttle[]> {
     return this.http.get<Shuttle[]>(`${URL}?q=${filter}`).toPromise();
  }

  getShuttle(id: string): Promise<Shuttle>  {
    return this.http.get<Shuttle>(`${URL}/${id}`).toPromise();
  }

  remove(id: string): Promise<void> {
    return this.http.delete<void>(`${URL}/${id}`).toPromise();
  }

  save(shuttle: Shuttle): Promise<Shuttle>  {
    return shuttle.id
    ? this.http.put<Shuttle>(`${URL}/${shuttle.id}`, shuttle).toPromise()
    : this.http.post<Shuttle>(`${URL}`, shuttle).toPromise();
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShuttleListComponent } from './shuttle-list/shuttle-list.component';
import { ShuttleListResolver } from './shuttle-list/shuttle-list.resolver';
import { EditShuttlesListComponent } from './edit-shuttles-list/edit-shuttles-list.component';
import { ShuttleResolver } from './edit-shuttles-list/edit-shuttles-list.resolver';
import { PassengerListComponent } from './passenger-list/passenger-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'list',
    component: ShuttleListComponent,
    resolve: {
      shuttles: ShuttleListResolver
    }
  },
  {
    path: 'passengers/:id',
    component: PassengerListComponent,
    resolve: {
      shuttle: ShuttleResolver
    }
  },
  {
    path: 'passengers',
    pathMatch: 'prefix',
    redirectTo: 'list',
  },
  {
    path: 'edit/:id',
    component: EditShuttlesListComponent,
    resolve: {
      shuttle: ShuttleResolver
    }
  },
    {
      path: 'create',
      component: EditShuttlesListComponent,
      data: {
        shuttle: {
          driverName: '',
          plateNumber: '',
          routeInfo: ''
        }
      }
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

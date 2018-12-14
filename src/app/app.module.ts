import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ShuttleListComponent } from './shuttle-list/shuttle-list.component';
import { ShuttleListResolver } from './shuttle-list/shuttle-list.resolver';
import { ShuttleService } from './shuttle.service';
import {HttpClientModule} from '@angular/common/http';
import { EditShuttlesListComponent } from './edit-shuttles-list/edit-shuttles-list.component';
import { ShuttleResolver } from './edit-shuttles-list/edit-shuttles-list.resolver';
import {CommonModule} from '@angular/common';
import { PassengerListComponent } from './passenger-list/passenger-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShuttleListComponent,
    EditShuttlesListComponent,
    PassengerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [ShuttleListResolver, ShuttleService, ShuttleResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

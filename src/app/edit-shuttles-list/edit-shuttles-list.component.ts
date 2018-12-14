import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ShuttleService } from '../shuttle.service';

@Component({
  selector: 'app-edit-shuttles-list',
  templateUrl: './edit-shuttles-list.component.html',
  styleUrls: ['./edit-shuttles-list.component.css']
})
export class EditShuttlesListComponent implements OnInit {
  id: string;
  form: FormGroup;

  constructor( public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private shuttleService: ShuttleService) {
      this.form = fb.group({
        driverName: ['', Validators.required],
        plateNumber: ['', Validators.required],
        routeInfo: ['', Validators.required],
        telNumberOfDriver: ['', Validators.required]
      });
     }

  ngOnInit() {
    const shuttle = this.route.snapshot.data['shuttle'];
    this.id = shuttle.id;
    if (this.id) {
      this.form.patchValue(shuttle);
    }
  }

  goBack() {
    this.router.navigate(['list'], {relativeTo: this.route.parent});
  }

  save() {
    if (this.form.valid) {
      this.shuttleService.save(Object.assign({id: +this.id}, this.form.value))
        .then(() => {
          this.goBack();
        });
    }
  }

}

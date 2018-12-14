import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShuttlesListComponent } from './edit-shuttles-list.component';

describe('EditShuttlesListComponent', () => {
  let component: EditShuttlesListComponent;
  let fixture: ComponentFixture<EditShuttlesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShuttlesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShuttlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherActivitiesComponent } from './other-activities.component';

describe('OtherActivitiesComponent', () => {
  let component: OtherActivitiesComponent;
  let fixture: ComponentFixture<OtherActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsProjectsComponent } from './robotics-projects.component';

describe('RoboticsProjectsComponent', () => {
  let component: RoboticsProjectsComponent;
  let fixture: ComponentFixture<RoboticsProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboticsProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboticsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcbProjectsComponent } from './pcb-projects.component';

describe('PcbProjectsComponent', () => {
  let component: PcbProjectsComponent;
  let fixture: ComponentFixture<PcbProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcbProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcbProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

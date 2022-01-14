import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementTrackComponent } from './placement-track.component';

describe('PlacementTrackComponent', () => {
  let component: PlacementTrackComponent;
  let fixture: ComponentFixture<PlacementTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

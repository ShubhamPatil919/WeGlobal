import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedProjectsComponent } from './embedded-projects.component';

describe('EmbeddedProjectsComponent', () => {
  let component: EmbeddedProjectsComponent;
  let fixture: ComponentFixture<EmbeddedProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbeddedProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

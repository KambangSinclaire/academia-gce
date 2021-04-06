import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastsectionComponent } from './lastsection.component';

describe('LastsectionComponent', () => {
  let component: LastsectionComponent;
  let fixture: ComponentFixture<LastsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

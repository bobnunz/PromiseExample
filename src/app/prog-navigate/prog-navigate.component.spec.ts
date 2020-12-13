import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgNavigateComponent } from './prog-navigate.component';

describe('ProgNavigateComponent', () => {
  let component: ProgNavigateComponent;
  let fixture: ComponentFixture<ProgNavigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgNavigateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

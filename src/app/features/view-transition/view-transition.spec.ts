import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransition } from './view-transition';

describe('ViewTransition', () => {
  let component: ViewTransition;
  let fixture: ComponentFixture<ViewTransition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTransition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

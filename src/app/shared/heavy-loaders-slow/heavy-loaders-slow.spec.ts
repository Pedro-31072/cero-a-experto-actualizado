import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyLoadersSlow } from './heavy-loaders-slow';

describe('HeavyLoadersSlow', () => {
  let component: HeavyLoadersSlow;
  let fixture: ComponentFixture<HeavyLoadersSlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyLoadersSlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeavyLoadersSlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

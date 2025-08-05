import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyLoadersFast } from './heavy-loaders-fast';

describe('HeavyLoadersFast', () => {
  let component: HeavyLoadersFast;
  let fixture: ComponentFixture<HeavyLoadersFast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyLoadersFast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeavyLoadersFast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

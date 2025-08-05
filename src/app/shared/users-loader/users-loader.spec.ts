import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLoader } from './users-loader';

describe('UsersLoader', () => {
  let component: UsersLoader;
  let fixture: ComponentFixture<UsersLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

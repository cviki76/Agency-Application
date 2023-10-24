import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkersComponent } from './admin-workers.component';

describe('AdminWorkersComponent', () => {
  let component: AdminWorkersComponent;
  let fixture: ComponentFixture<AdminWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWorkersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

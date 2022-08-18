import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgprorgamaComponent } from './argprorgama.component';

describe('ArgprorgamaComponent', () => {
  let component: ArgprorgamaComponent;
  let fixture: ComponentFixture<ArgprorgamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgprorgamaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgprorgamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

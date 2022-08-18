import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAcercadeComponent } from './perfil-acercade.component';

describe('PerfilAcercadeComponent', () => {
  let component: PerfilAcercadeComponent;
  let fixture: ComponentFixture<PerfilAcercadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAcercadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilAcercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

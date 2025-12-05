import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaSAPF } from './prova-sapf';

describe('ProvaSAPF', () => {
  let component: ProvaSAPF;
  let fixture: ComponentFixture<ProvaSAPF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvaSAPF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvaSAPF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

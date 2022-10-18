import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramfiveComponent } from './programfive.component';

describe('ProgramfiveComponent', () => {
  let component: ProgramfiveComponent;
  let fixture: ComponentFixture<ProgramfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramfiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

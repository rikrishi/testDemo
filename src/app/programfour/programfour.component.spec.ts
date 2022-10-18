import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramfourComponent } from './programfour.component';

describe('ProgramfourComponent', () => {
  let component: ProgramfourComponent;
  let fixture: ComponentFixture<ProgramfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramfourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

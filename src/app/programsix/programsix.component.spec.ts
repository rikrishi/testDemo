import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsixComponent } from './programsix.component';

describe('ProgramsixComponent', () => {
  let component: ProgramsixComponent;
  let fixture: ComponentFixture<ProgramsixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

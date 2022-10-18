import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramtwoComponent } from './programtwo.component';

describe('ProgramtwoComponent', () => {
  let component: ProgramtwoComponent;
  let fixture: ComponentFixture<ProgramtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramtwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

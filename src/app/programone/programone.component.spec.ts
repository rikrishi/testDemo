import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramoneComponent } from './programone.component';

describe('ProgramoneComponent', () => {
  let component: ProgramoneComponent;
  let fixture: ComponentFixture<ProgramoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

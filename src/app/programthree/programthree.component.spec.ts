import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramthreeComponent } from './programthree.component';

describe('ProgramthreeComponent', () => {
  let component: ProgramthreeComponent;
  let fixture: ComponentFixture<ProgramthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramthreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

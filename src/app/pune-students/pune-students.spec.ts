import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuneStudentsComponent } from './pune-students';

describe('PuneStudentsComponent', () => {
  let component: PuneStudentsComponent;
  let fixture: ComponentFixture<PuneStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuneStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuneStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledistrictComponent } from './singledistrict.component';

describe('SingledistrictComponent', () => {
  let component: SingledistrictComponent;
  let fixture: ComponentFixture<SingledistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingledistrictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingledistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

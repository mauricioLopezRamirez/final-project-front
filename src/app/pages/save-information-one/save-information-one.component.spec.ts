import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveInformationOneComponent } from './save-information-one.component';

describe('SaveInformationOneComponent', () => {
  let component: SaveInformationOneComponent;
  let fixture: ComponentFixture<SaveInformationOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveInformationOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveInformationOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

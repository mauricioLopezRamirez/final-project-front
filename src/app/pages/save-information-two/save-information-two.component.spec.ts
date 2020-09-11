import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveInformationTwoComponent } from './save-information-two.component';

describe('SaveInformationTwoComponent', () => {
  let component: SaveInformationTwoComponent;
  let fixture: ComponentFixture<SaveInformationTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveInformationTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveInformationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

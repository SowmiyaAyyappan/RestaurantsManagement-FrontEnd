import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandcardComponent } from './expandcard.component';

describe('ExpandcardComponent', () => {
  let component: ExpandcardComponent;
  let fixture: ComponentFixture<ExpandcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

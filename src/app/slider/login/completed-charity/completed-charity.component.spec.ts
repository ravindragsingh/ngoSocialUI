import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedCharityComponent } from './completed-charity.component';

describe('CompletedCharityComponent', () => {
  let component: CompletedCharityComponent;
  let fixture: ComponentFixture<CompletedCharityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedCharityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedCharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

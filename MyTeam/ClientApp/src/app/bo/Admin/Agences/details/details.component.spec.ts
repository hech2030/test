import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceDetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: AgenceDetailsComponent;
  let fixture: ComponentFixture<AgenceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgenceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

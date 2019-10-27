import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestprofinfoComponent } from './restprofinfo.component';

describe('RestprofinfoComponent', () => {
  let component: RestprofinfoComponent;
  let fixture: ComponentFixture<RestprofinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestprofinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestprofinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

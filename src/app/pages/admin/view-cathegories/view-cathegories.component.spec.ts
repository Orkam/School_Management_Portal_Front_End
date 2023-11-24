import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCathegoriesComponent } from './view-cathegories.component';

describe('ViewCathegoriesComponent', () => {
  let component: ViewCathegoriesComponent;
  let fixture: ComponentFixture<ViewCathegoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCathegoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCathegoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

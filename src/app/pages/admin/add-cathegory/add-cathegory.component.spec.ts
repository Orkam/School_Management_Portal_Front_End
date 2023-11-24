import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCathegoryComponent } from './add-cathegory.component';

describe('AddCathegoryComponent', () => {
  let component: AddCathegoryComponent;
  let fixture: ComponentFixture<AddCathegoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCathegoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCathegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterproductComponent } from './masterproduct.component';

describe('MasterproductComponent', () => {
  let component: MasterproductComponent;
  let fixture: ComponentFixture<MasterproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

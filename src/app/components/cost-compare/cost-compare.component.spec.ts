import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCompareComponent } from './cost-compare.component';

describe('CostCompareComponent', () => {
  let component: CostCompareComponent;
  let fixture: ComponentFixture<CostCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostCompareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

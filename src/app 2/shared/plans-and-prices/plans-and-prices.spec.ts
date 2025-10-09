import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansAndPrices } from './plans-and-prices';

describe('PlansAndPrices', () => {
  let component: PlansAndPrices;
  let fixture: ComponentFixture<PlansAndPrices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlansAndPrices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansAndPrices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

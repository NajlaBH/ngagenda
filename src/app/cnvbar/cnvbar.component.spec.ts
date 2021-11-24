import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnvbarComponent } from './cnvbar.component';

describe('CnvbarComponent', () => {
  let component: CnvbarComponent;
  let fixture: ComponentFixture<CnvbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnvbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnvbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

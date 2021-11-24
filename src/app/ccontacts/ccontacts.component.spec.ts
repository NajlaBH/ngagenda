import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcontactsComponent } from './ccontacts.component';

describe('CcontactsComponent', () => {
  let component: CcontactsComponent;
  let fixture: ComponentFixture<CcontactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcontactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

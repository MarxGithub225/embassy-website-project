import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlauneComponent } from './alaune.component';

describe('AlauneComponent', () => {
  let component: AlauneComponent;
  let fixture: ComponentFixture<AlauneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlauneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlauneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

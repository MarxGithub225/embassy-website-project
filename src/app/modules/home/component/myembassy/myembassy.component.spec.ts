import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyembassyComponent } from './myembassy.component';

describe('MyembassyComponent', () => {
  let component: MyembassyComponent;
  let fixture: ComponentFixture<MyembassyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyembassyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyembassyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

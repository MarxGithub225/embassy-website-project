import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskvisaComponent } from './askvisa.component';

describe('AskvisaComponent', () => {
  let component: AskvisaComponent;
  let fixture: ComponentFixture<AskvisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskvisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskvisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

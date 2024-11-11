import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsComponentComponent } from './animals-component.component';

describe('AnimalsComponentComponent', () => {
  let component: AnimalsComponentComponent;
  let fixture: ComponentFixture<AnimalsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalsComponentComponent]
    });
    fixture = TestBed.createComponent(AnimalsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

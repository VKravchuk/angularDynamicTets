import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSelectContainerComponent } from './components-select-container.component';

describe('ComponentsSelectContainerComponent', () => {
  let component: ComponentsSelectContainerComponent;
  let fixture: ComponentFixture<ComponentsSelectContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSelectContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSelectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, EventEmitter, OnInit, Output } from '@angular/core';


import { TestComponent1Component } from '../test-component-1/test-component-1.component';
import { TestComponent2Component } from '../test-component-2/test-component-2.component';

@Component({
  selector: 'app-components-select-container',
  templateUrl: './components-select-container.component.html',
  styleUrls: ['./components-select-container.component.css']
})
export class ComponentsSelectContainerComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onComponentClick(componentId) {
    this.notify.emit(componentId);
  }

}

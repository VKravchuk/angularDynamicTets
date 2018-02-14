import { Component, Inject, Input, OnInit, ViewContainerRef } from '@angular/core';
import { AddDynamicComponentService } from '../add-dynamic-component.service';
import { TestComponent1Component } from '../test-component-1/test-component-1.component';
import { TestComponent2Component } from '../test-component-2/test-component-2.component';

@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.css']
})
export class DynamicContainerComponent implements OnInit {

  private _componentsList = [];

  @Input() set componentItem(newComponentId) {
    this._componentsList.push(newComponentId);
    newComponentId && this.addChild(newComponentId);

  }

  constructor(
    @Inject(AddDynamicComponentService) private addDynamicComponentService,
    @Inject(ViewContainerRef) private viewContainerRef
  ) {}

  ngOnInit() {
  }

  addChild(componentId) {
    this.addDynamicComponentService.setRootViewContainerRef(this.viewContainerRef);

    switch (componentId) {
      case 1:
        this.addDynamicComponentService.addDynamicComponent(TestComponent1Component);
        break;
      case 2:
        this.addDynamicComponentService.addDynamicComponent(TestComponent2Component);
        break;
    }
  }

}

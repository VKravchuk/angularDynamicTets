import { ComponentFactoryResolver, Inject, Injectable } from '@angular/core';

@Injectable()
export class AddDynamicComponentService {

  private rootViewContainer;

  constructor(@Inject(ComponentFactoryResolver) private factoryResolver) { }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicComponent(addedDynamicComponent) {
    const factory = this.factoryResolver
      .resolveComponentFactory(addedDynamicComponent);

    const component = factory
      .create(this.rootViewContainer.parentInjector);

    this.rootViewContainer.insert(component.hostView);
  }

}

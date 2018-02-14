import { ComponentFactoryResolver, Inject, Injectable } from '@angular/core';

@Injectable()
export class AddDynamicComponentService {

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }

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

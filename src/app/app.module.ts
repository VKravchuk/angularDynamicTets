import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent1Component } from './test-component-1/test-component-1.component';
import { TestComponent2Component } from './test-component-2/test-component-2.component';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';
import { ComponentsSelectContainerComponent } from './components-select-container/components-select-container.component';
import { AddDynamicComponentService } from './add-dynamic-component.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent1Component,
    TestComponent2Component,
    DynamicContainerComponent,
    ComponentsSelectContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AddDynamicComponentService],
  bootstrap: [AppComponent],
  entryComponents: [TestComponent1Component, TestComponent2Component]
})
export class AppModule { }

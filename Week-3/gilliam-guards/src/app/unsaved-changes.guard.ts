import { Injectable } from "@angular/core";
import { ProductComponent } from './product/product.component';
import { CanDeactivate, Router } from "@angular/router";

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
    if (component.name.dirty) {
      return window.confirm("You have unsaved changes. Still want to leave?");
    } else {
      return true;
    }
  }
}

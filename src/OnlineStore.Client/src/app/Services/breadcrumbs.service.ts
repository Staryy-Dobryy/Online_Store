import { EventEmitter, Injectable } from "@angular/core";
import { BreadcrumbsModel } from "../Models/breadcrumbs.model";
import { BehaviorSubject } from "rxjs";
import { ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class BreadcrumbsService {
  breadcrumbs$ = new BehaviorSubject<BreadcrumbsModel[]>([]);
  constructor() { }

  public addBreadcrumbs(breadcrumb: BreadcrumbsModel) {
    const newBreadcrumb = this.breadcrumbs$.value.some(x => x.label == breadcrumb.label) ? [...this.breadcrumbs$.value.slice(0, this.breadcrumbs$.value.findIndex(x => x.label == breadcrumb.label) + 1)] : [...this.breadcrumbs$.value, breadcrumb]
    this.breadcrumbs$.next(newBreadcrumb)
  }
}

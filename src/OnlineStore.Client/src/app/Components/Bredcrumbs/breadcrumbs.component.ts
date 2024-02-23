import { Component } from '@angular/core';
import { BreadcrumbsService } from '../../Services/breadCrumbs.service';
import { Observable } from 'rxjs';
import { BreadcrumbsModel } from '../../Models/breadcrumbs.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  breadcrumbs$!: Observable<BreadcrumbsModel[]>;
  constructor(private breadcrumbsService: BreadcrumbsService) { }



}

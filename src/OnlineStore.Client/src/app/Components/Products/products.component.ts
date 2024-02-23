import { Component, OnInit } from '@angular/core';
import { BreadcrumbsModel } from '../../Models/breadcrumbs.model';
import { BreadcrumbsService } from '../../Services/breadCrumbs.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor() {  }

  ngOnInit(): void {

  }
}

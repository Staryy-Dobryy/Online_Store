import { Component, OnInit } from '@angular/core';
import { BreadcrumbsModel } from '../../Models/breadcrumbs.model';
import { Observable } from 'rxjs';
import { BreadcrumbsService } from '../../Services/breadCrumbs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {  }

  ngOnInit(): void {

  }
}

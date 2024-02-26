import { Component } from '@angular/core';
import { BreadcrumbsService } from '../../Services/breadCrumbs.service';
import { Observable } from 'rxjs';
import { BreadcrumbsModel } from '../../Models/breadcrumbs.model';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  authorized: boolean = false
  currentLang!: string

  constructor(private router: Router, private translateService: TranslateService) { }

  ngOnInit(): void {
    this.currentLang = this.translateService.currentLang
    console.log(this.router.url == "/")
    if (localStorage.getItem("jwt")) {
      this.authorized = true
    }
  }

  changeLanguage(lang: string) {
    localStorage.setItem("lang", lang)
    this.currentLang = lang
    this.translateService.use(lang)
    
  }
}

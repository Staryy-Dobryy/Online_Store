import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
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
export class NavigationComponent implements OnInit, AfterViewInit {
  @Input() controlComponent!: ElementRef | undefined;

  authorized: boolean = false;
  hideNavigation: boolean = false;
  hideNavigationCheched: boolean = false;

  currentLang!: string;

  constructor(private router: Router, private translateService: TranslateService) { }

  ngOnInit(): void {
    this.currentLang = this.translateService.currentLang
    if (localStorage.getItem("jwt")) {
      this.authorized = true
    }
    setTimeout(() => {
      if (this.controlComponent) {
        this.hideNavigation = true

        setInterval(() => {
          const threshold = 0.2; // Процент видимости элемента
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {

                this.hideNavigation = true
                observer.disconnect(); // Отключите наблюдение, если необходимо
              }
              else {

                this.hideNavigation = false
              }
            });
          }, { threshold });
          observer.observe(this.controlComponent!.nativeElement);

        }, 200)
      }

      this.hideNavigationCheched = true
    })
  }

  ngAfterViewInit(): void {
    
  }

  changeLanguage(lang: string) {
    localStorage.setItem("lang", lang)
    this.currentLang = lang
    this.translateService.use(lang)
    
  }
}

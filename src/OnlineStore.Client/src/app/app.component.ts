import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    const lang = localStorage.getItem("lang")
    if (lang) {
      this.translateService.use(lang)
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IProductPreview } from '../../Models/productPreview.model';


@Component({
  selector: 'app-imgSlider',
  templateUrl: './imgSlider.component.html',
  styleUrls: ['./imgSlider.component.css']
})
export class ImgSliderComponent {
  @Input() imgPreviews!: IProductPreview[]
  scale: number = 0;
  back() {
    if (this.scale > 0) {
      this.scale = this.scale - 1
    }
  }
  next() {
    if (this.scale < this.imgPreviews.length - 1)
      this.scale = this.scale + 1
  }
}

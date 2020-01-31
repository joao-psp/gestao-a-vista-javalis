import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-glide-element',
  templateUrl: './glide-element.component.html',
  styleUrls: ['./glide-element.component.scss'],
  host: {
    '[class.glide__slide]': 'true'
  }
})
export class GlideElementComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

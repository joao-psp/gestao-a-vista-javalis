import {
  Component,
  AfterViewInit,
  QueryList,
  ContentChildren,
  HostBinding,
  Input,
  Renderer2,
  ElementRef,
  OnInit
} from '@angular/core';
import { GlideElementComponent } from './glide-element/glide-element.component';
import { GlideOptions } from './glide-options.model';

// @ts-ignore
import Glide from '@glidejs/glide';

let nextId = 0;

@Component({
  selector: 'app-glide',
  templateUrl: './glide.component.html',
  styleUrls: ['./glide.component.scss'],
  host: {
    class: 'glide-container'
  }
})
export class GlideComponent implements OnInit, AfterViewInit {
  @ContentChildren(GlideElementComponent) glideElements: QueryList<
    GlideElementComponent
  >;
  @Input() glideOptions: GlideOptions;

  public glideId: number;

  private glide: any;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.glideId = nextId++;
  }

  public ngOnInit(): void {
    this.renderer.addClass(
      this.elementRef.nativeElement,
      'glide-id-' + this.glideId
    );
  }

  public ngAfterViewInit(): void {
    this.inicializarCarrossel();
  }

  private inicializarCarrossel() {
    this.glide = new Glide(
      '.glide-container.glide-id-' + this.glideId + '',
      this.glideOptions
    ).mount();

    this.glide.play();
  }
}

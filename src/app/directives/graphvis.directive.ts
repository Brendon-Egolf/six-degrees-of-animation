import { Directive, TemplateRef, ViewContainerRef, Input, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { Network } from 'vis';

@Directive({
  selector: '[appGraphVis]'
})
export class GraphVisDirective implements AfterViewInit {
  @Input('appGraphVis') params: any;
  network;

  constructor(private el: ElementRef) {}


  ngAfterViewInit() {
    console.log('graph data ', this.params);

    if (!this.network) {
      this.network = new Network(this.el.nativeElement, this.params.graphData, this.params.options);
    }
  }

}

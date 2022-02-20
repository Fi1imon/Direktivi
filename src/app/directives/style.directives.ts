import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})

export class StyleDirectives {

  @Input('appStyle') color: string = 'blue'
  @Input() fontWeight = 'normal'

  @HostBinding('style.color') elColor: any = null

  constructor(private el:ElementRef, private renderer: Renderer2) {

  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color
    // this.renderer.setStyle(this.el.nativeElement, 'color', this.color)
    // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight)
  }

  @HostListener('mouseleave') offEnter() {
    this.elColor = null
    // this.renderer.setStyle(this.el.nativeElement, 'color', null)
    // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null)
  }
}



import {Directive, ElementRef, HostListener,Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})

export class StyleDirectives {

  @Input('appStyle') color: string = 'blue'
  @Input() fontWeight = 'normal'

  constructor(private el:ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'green')

  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color)
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight)
  }

  @HostListener('mouseleave') offEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', null)
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null)
  }
}



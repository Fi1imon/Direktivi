import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})

export class StyleDirectives {
  constructor(private el:ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'green')

  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue')
  }

  @HostListener('mouseleave') offEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', null)
  }
}



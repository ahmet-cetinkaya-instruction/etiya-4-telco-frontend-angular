import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[etiyaButton]'
})
export class ButtonDirective implements OnInit{
  @Input() etiyaButton!:'login' | 'search' | 'clear-disabled' | 'clear' | 'img-search' | 'create' | 'create-logo' | 'new-address' | 'edit' | 'remove' | 'accordion-body';

  constructor(private renderer: Renderer2,private hostElement: ElementRef) {
  }

  ngOnInit(){
    this.renderer.addClass(this.hostElement.nativeElement, `e-btn-${this.etiyaButton}`);
  }

}

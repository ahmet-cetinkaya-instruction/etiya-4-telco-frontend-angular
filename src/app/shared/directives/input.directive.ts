import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[etiyaInput]',
})
export class InputDirective {
  @Input() etiyaInput!: 'white' | 'dark';

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  ngOnInit() {
    this.renderer.addClass(
      this.hostElement.nativeElement,
      `e-input-${this.etiyaInput}`
    );
  }
}

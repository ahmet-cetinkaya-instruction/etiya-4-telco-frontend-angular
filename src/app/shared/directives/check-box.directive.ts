import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[etiyaCheckBox]',
})
export class CheckBoxDirective {
  @Input() etiyaCheckBox!: 'dark';

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  ngOnInit() {
    this.renderer.addClass(this.hostElement.nativeElement, `form-check-input`);
    this.renderer.addClass(
      this.hostElement.nativeElement,
      `e-check-box-${this.etiyaCheckBox}`
    );
  }
}

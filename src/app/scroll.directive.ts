import { Directive, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]',
  host: {'(window:scroll)': 'track($event)'},
})
export class ScrollDirective {
  @Output() scrolled:EventEmitter<any> = new EventEmitter();
 
  track(event:any) {
    this.scrolled.emit(document.body.scrollTop);
  }
  constructor() { }

}

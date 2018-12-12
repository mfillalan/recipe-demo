import { Directive, OnInit, OnDestroy, Output, HostListener, EventEmitter, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective implements OnInit {

  @Output() public clickOutside = new EventEmitter<Object>();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this.el.nativeElement.contains(targetElement);
    if(!clickedInside) {
      this.clickOutside.emit(null);
    }
  }

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

}
import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
	//Hostbinding maps an attribute or class in the html to a property
	@HostBinding('class.open') open: boolean = false;
	//HostListener lets you set up event-like reactions to input
	@HostListener('click') toggleOpen(){
		this.open = !this.open;
	}
  constructor() { }


}

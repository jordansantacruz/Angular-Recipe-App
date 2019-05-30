import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html'
	})
export class HeaderComponent{
	@Output() featureSelected = new EventEmitter<string>();

	onRecipeClick(){
		this.featureSelected.emit('recipe');
	}

	onShoppingListClick(){
		this.featureSelected.emit('shopping-list');
	}
}
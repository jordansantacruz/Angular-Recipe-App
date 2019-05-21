import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import {  Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('nameInput') nameInputRef: ElementRef;
	@ViewChild('amtInput') amtInputRef: ElementRef;
	@Output() addEventEmitter = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addButtonClick(){
  	this.addEventEmitter.emit(new Ingredient(
  		this.nameInputRef.nativeElement.value, 
  		this.amtInputRef.nativeElement.value));
  }
}

import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import {  Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('nameInput') nameInputRef: ElementRef;
	@ViewChild('amtInput') amtInputRef: ElementRef;
  constructor(private shoppingListServ: ShoppingListService) { }

  ngOnInit() {
  }

  addButtonClick(){
  	this.shoppingListServ.addIngredient(new Ingredient(
      this.nameInputRef.nativeElement.value, 
      this.amtInputRef.nativeElement.value));
  }

  clearButtonClick(){
    console.log("click happens");
    this.shoppingListServ.clearIngredients();
  }
}

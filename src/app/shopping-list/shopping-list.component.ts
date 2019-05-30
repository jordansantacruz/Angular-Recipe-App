import { Component, OnInit } from '@angular/core';
//Import all classes that you want to use locally first
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
	ingredients: Ingredient[];

  constructor(private shoppingListServ: ShoppingListService) { }

  ngOnInit() {
  	this.ingredients = this.shoppingListServ.getIngredients();
  	//this.shoppingListServ.ingredientsChanged.subscribe((newIngList: Ingredient[]) => {this.ingredients = newIngList});
  	this.shoppingListServ.ingredientsChanged.subscribe((newIngList: Ingredient[]) => {this.updateWorkingList(newIngList)});
  	
  }

  updateWorkingList(newIngList: Ingredient[]){
  	this.ingredients = newIngList;
  }

}

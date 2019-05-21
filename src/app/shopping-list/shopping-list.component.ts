import { Component, OnInit } from '@angular/core';
//Import all classes that you want to use locally first
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
	ingredients = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10)
	];

  constructor() { }

  ngOnInit() {
  }

  addListItemEventReceived(ingredient: Ingredient){
    if(ingredient.name != "" && ingredient.amount > 0){
      this.ingredients.push(ingredient);  
    }
    
  }

}

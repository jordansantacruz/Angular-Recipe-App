import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10)
	];
	public ingredientsChanged = new EventEmitter<Ingredient[]>();
	public ingredientSelected = new EventEmitter<Ingredient>();

	public clearIngredients(){
		this.ingredients = [];
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	public getIngredients(){
		return this.ingredients.slice();
	}

	public addIngredient(ing: Ingredient){
		var subset: Ingredient[];
		//See if you're adding an ingredient already in the list
		subset = this.ingredients.filter(e => e.name === ing.name);
		if(subset.length > 0){
			//If so, simply add to the amount you want to buy
			subset[0].amount = Number(ing.amount) + Number(subset[0].amount);
		}
		//Else simply add the new ingredient
		else{
			this.ingredients.push(ing);
		}
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	public addIngredients(ings: Ingredient[]){
		for(let ing of ings){
			this.addIngredient(ing);
		}
	}

	public deleteIngredient(ing: Ingredient){
		ing = undefined;
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}
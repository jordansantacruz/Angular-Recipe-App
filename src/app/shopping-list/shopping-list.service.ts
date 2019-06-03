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
		subset = this.ingredients.filter(e => e.name === ing.name);
		if(subset.length > 0){
			subset[0].amount = Number(ing.amount) + Number(subset[0].amount);
		}

		else{
			this.ingredients.push(ing);
		}
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	public deleteIngredient(ing: Ingredient){
		ing = undefined;
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}
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
		this.ingredients.push(ing);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	public deleteIngredient(ing: Ingredient){
		ing = undefined;
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}
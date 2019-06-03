import {EventEmitter} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

  private defaultIngredientList: Ingredient[] = [
    new Ingredient('Bread', 1),
    new Ingredient('Tomato', 2),
    new Ingredient('Beef', 3)
  ];
	private  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a Test', 
      'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg',
      this.defaultIngredientList),
    new Recipe('Test Recipe 2', 'This is also a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
      this.defaultIngredientList)
  ];

  public recipeSelected = new EventEmitter<Recipe>();
  
  getRecipes(){
  	//Slice with no args creates a copy
  	return this.recipes.slice();
  }

  selectRecipe(recipe: Recipe){
    //this.selectedRecipe = recipe;
  }
}
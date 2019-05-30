import {EventEmitter} from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
	private  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a Test', 
      'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg'),
    new Recipe('Test Recipe 2', 'This is also a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg')
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
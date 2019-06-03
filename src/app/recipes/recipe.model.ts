import { Ingredient } from '../shared/ingredient.model'

//An example of declaring a custom class to be used in the rest of the code
export class Recipe {
	public name: string;
	public description: string;
	public imagePath: string;
	public ingredients: Ingredient[];

	constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]){
		this.name = name;
		this.description = desc;
		this.imagePath = imagePath;
		this.ingredients = ingredients;
	}
}
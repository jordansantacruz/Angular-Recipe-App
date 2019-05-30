//An example of declaring a custom class to be used in the rest of the code
export class Recipe {
	public name: string;
	public description: string;
	public imagePath: string;

	constructor(name: string, desc: string, imagePath: string){
		this.name = name;
		this.description = desc;
		this.imagePath = imagePath;
	}
}
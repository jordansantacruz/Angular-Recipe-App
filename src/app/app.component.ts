 import { Component, Output, EventEmitter } from '@angular/core';
 import { ShoppingListService } from './shopping-list/shopping-list.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent {
  title = 'recipe-app';
  loadedFeature:string = 'recipe';

  onNavigate(feature: string){
  	this.loadedFeature = feature;   
  }
}

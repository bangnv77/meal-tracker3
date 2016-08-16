import { Component } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker!</h1>
      <food-list [foodList]='foodList'></food-list>
    </div>
  `
})

export class AppComponent {
  foodList=[
    new Food("Burrito", "Entree", "from Los Gorditos", 1500),
    new Food("Spaghetti Bolognese", "Entree", "from Pastini", 1000),
    new Food("Nature Valley Bar", "Snack", "Oats and Honey, oh so yummy", 400),
    new Food("Iceberg", "Salad", "basically water", 0),
    new Food("Ranch Dressing", "Salad", "basically mayo", 200)
  ]
}

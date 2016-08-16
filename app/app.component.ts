import { Component } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker!</h1>
      <food-display *ngFor="#currentFood of foodList" [food]=currentFood></food-display>
    </div>
  `
})

export class AppComponent {
  foodList=[
    new Food("Burrito", "Entree", "from Los Gorditos", 1500),
    new Food("Spaghetti Bolognese", "Entree", "from Pastini", 1000)
  ]
}

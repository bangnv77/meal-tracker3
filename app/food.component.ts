import { Component, Input } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  templateUrl: 'app/food.component.html'
})

export class FoodComponent {
  @Input() food: Food;
}

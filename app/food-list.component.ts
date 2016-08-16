import { Component, Input, Output } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  templateUrl: 'app/food-list.component.html',
  directives: [FoodComponent]
})

export class FoodListComponent {
  @Input() foodList: Food[];
}

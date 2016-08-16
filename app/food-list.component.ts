import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { NewFoodComponent } from './new-food.component';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  templateUrl: 'app/food-list.component.html',
  directives: [FoodComponent, NewFoodComponent]
})

export class FoodListComponent {
  @Input() foodList: Food[];
  @Output() onPassFoodUp: EventEmitter<Food> = new EventEmitter();
  passNewFoodUp(newFood: Food) {
  console.log("food received");
  this.onPassFoodUp.emit(newFood);
  }
}

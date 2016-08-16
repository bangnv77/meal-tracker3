import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { NewFoodComponent } from './new-food.component';
import { CaloriePipe } from './calorie.pipe';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  templateUrl: 'app/food-list.component.html',
  pipes: [CaloriePipe],
  directives: [FoodComponent, NewFoodComponent]
})

export class FoodListComponent {
  @Input() foodList: Food[];
  @Output() onPassFoodUp: EventEmitter<Food> = new EventEmitter();
  filterCalorie: string;
  selectedFood: Food;

  passNewFoodUp(newFood: Food) {
  console.log("food received");
  this.onPassFoodUp.emit(newFood);
  }

  onCalorieFilterChange(newFilter: string) {
    this.filterCalorie = newFilter;
  }

  foodClicked(food: Food) {
    this.selectedFood = food;
  }

  doneEditing() {
    delete this.selectedFood;
  }
}

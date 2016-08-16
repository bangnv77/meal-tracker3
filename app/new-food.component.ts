import { Component, EventEmitter, Output } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food-form',
  templateUrl: 'app/new-food.component.html'
})

export class NewFoodComponent {
  @Output() onSubmitNewFood: EventEmitter<Food> = new EventEmitter();
  inputFood(newFoodName: HTMLInputElement, newFoodType: HTMLInputElement, newFoodDetails: HTMLInputElement, newFoodCalories: HTMLInputElement) {
    console.log('enters function');
    var emissionFood = new Food(newFoodName.value, newFoodType.value, newFoodDetails.value, parseInt(newFoodCalories.value));
    this.onSubmitNewFood.emit(emissionFood);
  }
}

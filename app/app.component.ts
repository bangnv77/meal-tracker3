import { Component } from 'angular2/core';
import { FoodComponent } from './food.component';

@Component({
  selector: 'my-app',
  directives: [FoodComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker!</h1>
      <food-display></food-display>
    </div>
  `
})

export class AppComponent {

}

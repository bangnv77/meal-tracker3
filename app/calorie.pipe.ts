import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "caloriePipe",
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredPipeThreshold = args[0];
    if (desiredPipeThreshold === "low") {
      return input.filter((food) => {
        return food.calories <= 500;
      });
    } else if (desiredPipeThreshold === "high") {
      return input.filter((food) => {
        return food.calories >=500;
      });
    } else {
      return input;
    }
  }
}

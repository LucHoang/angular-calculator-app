import { Component, OnInit } from '@angular/core';
import {Calculator} from '../calculator';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculator: Calculator = {
    first: 0,
    second: 0,
    result: 0,
  };

  calculate(operator) {
    switch (operator) {
      case '+':
        this.calculator.result = this.calculator.first + this.calculator.second;
        break;
      case '-':
        this.calculator.result = this.calculator.first - this.calculator.second;
        break;
      case '*':
        this.calculator.result = this.calculator.first * this.calculator.second;
        break;
      case '/':
        // if(this.calculator.second !== 0)
        this.calculator.result = this.calculator.first / this.calculator.second;
        break;
        // else
        //   throw new RuntimeException("Can't divide by zero");
      default:
        return 0;
    }
  }
  constructor() { }

  ngOnInit() {
  }
}


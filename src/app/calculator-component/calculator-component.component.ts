import { Component, OnInit } from '@angular/core';
import { CalculatorServiceService } from '../calculator-service.service';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.scss']
})
export class CalculatorComponentComponent implements OnInit {
 public title ="CALCULATOR";

 

  constructor(public calculatorServiceService : CalculatorServiceService) { }

  ngOnInit(): void {
  }
  public addition() {
    this.calculatorServiceService.result = this.calculatorServiceService.num1 + this.calculatorServiceService.num2;
  }

  subtraction() {
    this.calculatorServiceService.result = this.calculatorServiceService.num1 - this.calculatorServiceService.num2;
  }

  multiplication() {
    this.calculatorServiceService.result = this.calculatorServiceService.num1 * this.calculatorServiceService.num2;
  }

  division() {
    this.calculatorServiceService.result = this.calculatorServiceService.num1 / this.calculatorServiceService.num2;
  }
}

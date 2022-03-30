import { Component, OnInit } from '@angular/core';
import { CalculatorServiceService } from '../calculator-service.service';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.scss']
})
export class CalculatorComponentComponent implements OnInit {
 public title ="CALCULATOR";

 public num1:number;
 public num2:number;
 public result:number;

  constructor() { }

  ngOnInit(): void {
  }
  public addition() {
    this.result = this.num1 + this.num2;
  }

  subtraction() {
    this.result = this.num1 - this.num2;
  }

  multiplication() {
    this.result = this.num1 * this.num2;
  }

  division() {
    this.result = this.num1 / this.num2;
  }
}

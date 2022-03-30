import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {
  public num1:number;
  public num2:number;
  public result:number;

  constructor() { }
}

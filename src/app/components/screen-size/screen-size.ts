import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component
(
  {
  selector: 'app-screen-size',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './screen-size.html',
  styleUrls: ['./screen-size.scss']
  }
)

export class ScreenSize 
{
  // Input variables
  diagInInches: boolean = true;

  // vars for different modes
  diag: number = 0;
  disp: number = 1.7777; // 16:9
  width: number = 0;
  height: number = 0;
  results: { x: number; y: number; diagonal: number; disp: number } = { x: 0, y: 0, diagonal: 0, disp: 0 };

  private get diagInInchesMultiplier(): number { return this.diagInInches ? 2.54 : 1; }

  // Calcualte From:
  
  calculateFromDiagDisp(): void 
  { // y = (diag)/sqrt(1 + disp^2); x = y * disp
    const y = this.diag / (Math.sqrt(1 + (this.disp * this.disp)));
    const x = y * this.disp;
    this.updateResults(x * this.diagInInchesMultiplier, y * this.diagInInchesMultiplier, this.diag, this.disp);
  }

  calculateFromXY(): void 
  { // diag = sqrt(x^2 + y^2)/inches; disp = x/y
    if (this.height === 0) return;
    const disp = this.width / this.height;
    const diag = Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / this.diagInInchesMultiplier;
    this.updateResults(this.width, this.height, diag, disp);
  }

  calculateFromXDiag(): void 
  { // y = sqrt((diag*inches)^2 - x^2); disp = x/y
    const xInBase = this.width;
    const diagInBase = this.diag * this.diagInInchesMultiplier;
    if (diagInBase <= xInBase) return;

    const y = Math.sqrt(Math.pow(diagInBase, 2) - Math.pow(xInBase, 2));
    const disp = xInBase / y;
    this.updateResults(xInBase, y, this.diag, disp);
  }

  calculateFromXDisp(): void 
  { // y = x/disp; diag = sqrt(x^2 + y^2)/inches
    if (this.disp === 0) return;
    const y = this.width / this.disp;
    const diagonal = Math.sqrt(Math.pow(this.width, 2) + Math.pow(y, 2)) / this.diagInInchesMultiplier;
    this.updateResults(this.width, y, diagonal, this.disp);
  }

  private updateResults(x: number, y: number, diag: number, disp: number): void 
  {
    this.results = 
    {
      x: Number(x.toFixed(2)),
      y: Number(y.toFixed(2)),
      diagonal: Number(diag.toFixed(2)),
      disp: Number(disp.toFixed(2))
    };
  }

}
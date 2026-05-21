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

<<<<<<< HEAD
  calculateXandY(): void 
  {
    const inchesConverter = this.diagInInches ? 2.54 : 1.0;
=======
  // Output record
  results = { x: 0, y: 0, diagonal: 0, disp: 0 };
  get inchesConverter() { return this.diagInInches ? 2.54 : 1.0; }

  // calculateXandY(): void 
  // {
  //   const inchesConverter = this.diagInInches ? 2.54 : 1.0;
>>>>>>> de1dc7eddd4909b09a9d52e76111eca83bd81059
    
  //   // Java: getXAndYFromDiagAndDisp
  //   const y = this.diag / (Math.sqrt(1 + (this.disp * this.disp)));
  //   const x = y * this.disp;

  //   this.results = 
  //   {
  //     x: Number((x * inchesConverter).toFixed(2)),
  //     y: Number((y * inchesConverter).toFixed(2)),
  //     diagonal: this.diag,
  //     disp: this.disp
  //   };
  // }

  // Calcualte From:
  
  calculateFromDiagDisp(): void 
  {
    const y = this.diag / (Math.sqrt(1 + (this.disp * this.disp)));
    const x = y * this.disp;
    this.updateResults(x * this.inchesConverter, y * this.inchesConverter, this.diag, this.disp);
  }

  calculateFromXY(): void 
  {
    if (this.height === 0) return;
    const disp = this.width / this.height;
    const diagonal = Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / this.inchesConverter;
    this.updateResults(this.width, this.height, diagonal, disp);
  }

  calculateFromXDiag(): void 
  {
    const xInBase = this.width;
    const diagInBase = this.diag * this.inchesConverter;
    if (diagInBase <= xInBase) return;

    const y = Math.sqrt(Math.pow(diagInBase, 2) - Math.pow(xInBase, 2));
    const disp = xInBase / y;
    this.updateResults(xInBase, y, this.diag, disp);
  }

  calculateFromXDisp(): void 
  {
    if (this.disp === 0) return;
    const y = this.width / this.disp;
    const diagonal = Math.sqrt(Math.pow(this.width, 2) + Math.pow(y, 2)) / this.inchesConverter;
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

<<<<<<< HEAD
  calculateXAndDiag(): void
  {
    const inchesConverter = this.diagInInches ? 2.54 : 1.0;
    
    // Java: getXAndDiagFromYAndDisp
    const x = this.disp * this.diag;
    const diag = Math.sqrt((x * x) + (this.diag * this.diag));
  }

    calculateXAndDisp(): void
    {
      const inchesConverter = this.diagInInches ? 2.54 : 1.0;
    }

    calculateDiagAndDisp(): void
    {
      const inchesConverter = this.diagInInches ? 2.54 : 1.0;
    }
=======

>>>>>>> de1dc7eddd4909b09a9d52e76111eca83bd81059
}
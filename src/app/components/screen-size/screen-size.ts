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
  diag: number = 0;
  disp: number = 1.7777; // 16:9
  diagInInches: boolean = true;

  // Output record
  results = { x: 0, y: 0, diagonal: 0, ratio: 0 };

  calculateXandY(): void 
  {
    const inchesConverter = this.diagInInches ? 2.54 : 1.0;
    
    // Java: getXAndYFromDiagAndDisp
    const y = this.diag / (Math.sqrt(1 + (this.disp * this.disp)));
    const x = y * this.disp;

    this.results = 
    {
      x: Number((x * inchesConverter).toFixed(2)),
      y: Number((y * inchesConverter).toFixed(2)),
      diagonal: this.diag,
      ratio: this.disp
    };
  }

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
}
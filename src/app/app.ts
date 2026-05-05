import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitConverter } from './components/unit-converter/unit-converter';
import { ScreenSize } from './components/screen-size/screen-size';

@Component
(
  {
    selector: 'app-root',
    standalone: true,
    imports: 
      [
        CommonModule, 
        UnitConverter, 
        ScreenSize
      ],
    templateUrl: './app.html',
    styleUrl: './app.scss'
  }
)

export class App
{
  activeCalc: string = 'screen'; // Default calculator
  explanationText: string = 'Select a tool to view specific documentation and usage tips.';

  getActiveTitle(): string 
  {
    const titles: Record<string, string> = 
      {
        'screen': 'Screen Size Calculator',
        'unit': 'Unit Converter',
        'angle': 'Angle Measurement',
        'currency': 'Currency Converter'
      };
    return titles[this.activeCalc];
  }
  scrollTo(id: string): void 
  {
    // 1. Find the element
    const element = document.getElementById('collapse' + id.charAt(0).toUpperCase() + id.slice(1));
    const targetButton = document.querySelector(`[data-bs-target="#${element?.id}"]`) as HTMLElement;

    // 2. If the accordion section is collapsed, click the header to open it
    if (element && !element.classList.contains('show') && targetButton) { targetButton.click(); }

    // 3. Scroll the main container into view
    const mainElement = document.getElementById(id + '-section');
    if (mainElement) { mainElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }
}
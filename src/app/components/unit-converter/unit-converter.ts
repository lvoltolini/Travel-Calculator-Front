import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';






import unitData from '../../../assets/unitDefinitions.json';






@Component
(
  {
    selector: 'app-unit-converter',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './unit-converter.html',
    styleUrls: ['./unit-converter.scss']
  }
)
export class UnitConverter implements OnInit 
{
  // Model data
  categories: string[] = [];
  selectedCategory: string = 'distance';
  
  units: string[] = [];
  fromUnit: string = '';
  toUnit: string = '';
  
  inputValue: number = 1;
  result: number | null = null;
  decimalLevel: number = 2;

  ngOnInit() 
  {
    this.categories = Object.keys(unitData);
    this.updateUnits();
  }

  updateUnits() 
  {
    const categoryData = (unitData as any)[this.selectedCategory];
    this.units = Object.keys(categoryData.factors);
    this.fromUnit = this.units[0];
    this.toUnit = this.units[1] || this.units[0];
    this.convert();
  }

  convert() 
  {
    const categoryData = (unitData as any)[this.selectedCategory].factors;
    const fromFactor = categoryData[this.fromUnit];
    const toFactor = categoryData[this.toUnit];

    // Java code
    const rawResult = this.inputValue * (fromFactor / toFactor);
    
    // Formatting logic (No need for Locale)
    this.result = parseFloat(rawResult.toFixed(this.decimalLevel));
  }
}
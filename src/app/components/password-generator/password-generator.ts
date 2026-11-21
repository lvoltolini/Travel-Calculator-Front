import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.scss'
})
export class PasswordGenerator implements OnInit {
  password: string = '';
  savedPasswords: string[] = [];

  config = {
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    specialChars: true
  };

  private readonly STORAGE_KEY = 'savedPasswords';

  ngOnInit() {
    this.loadSavedPasswords();
    this.generatePassword();
  }

  generatePassword() {
    let chars = '';

    if (this.config.uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (this.config.lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (this.config.numbers) chars += '0123456789';
    if (this.config.specialChars) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!chars) {
      this.password = '';
      return;
    }

    this.password = '';
    for (let i = 0; i < this.config.length; i++) {
      this.password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }

  copyToClipboard() {
    if (this.password) {
      navigator.clipboard.writeText(this.password).then(() => {
        alert('Password copied to clipboard!');
      });
    }
  }

  savePassword() {
    if (this.password && !this.savedPasswords.includes(this.password)) {
      this.savedPasswords.unshift(this.password);
      this.updateStorage();
      alert('Password saved!');
    }
  }

  deleteSavedPassword(password: string) {
    this.savedPasswords = this.savedPasswords.filter(p => p !== password);
    this.updateStorage();
  }

  copySavedPassword(password: string) {
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard!');
    });
  }

  clearAll() {
    if (confirm('Are you sure you want to clear all saved passwords?')) {
      this.savedPasswords = [];
      this.updateStorage();
    }
  }

  private loadSavedPasswords() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      this.savedPasswords = JSON.parse(stored);
    }
  }

  private updateStorage() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.savedPasswords));
  }
}

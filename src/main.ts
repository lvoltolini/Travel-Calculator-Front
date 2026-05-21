import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app'; // Make sure this matches your filename
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
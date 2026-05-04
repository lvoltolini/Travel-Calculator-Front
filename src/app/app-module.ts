import { NgModule, provideBrowserGlobalErrorListeners } from "@angular/core";
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing-module";
import { App } from "./app";
import { ScreenSize } from "./components/screen-size/screen-size";
import { UnitConverter } from "./components/unit-converter/unit-converter";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: 
  [
    App, 
  ],
  imports: 
  [
    BrowserModule, 
    FormsModule,
    CommonModule,
    AppRoutingModule,
    ScreenSize, 
    UnitConverter
  ],
  providers: 
  [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App],
})
export class AppModule {}

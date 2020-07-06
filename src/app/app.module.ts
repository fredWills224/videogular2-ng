import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeViewerComponent } from './time-viewer/time-viewer.component';
import { VgPipComponent } from './vg-pip/vg-pip.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeViewerComponent,
    VgPipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

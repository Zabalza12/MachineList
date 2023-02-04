import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MachineListComponent } from './machine-list/machine-list.component';
import { HttpClientModule } from '@angular/common/http';

import { MachineService } from './services/machine.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  declarations: [AppComponent, MachineListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [MachineService],
  bootstrap: [AppComponent],
})
export class AppModule {}

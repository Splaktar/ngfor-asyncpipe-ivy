import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {VersionPicker} from './version-picker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DemoMaterialModule} from '../material-module';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    VersionPicker
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [VersionPicker]
})
export class AppModule {}

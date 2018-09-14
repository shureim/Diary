import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryDetailsComponent } from './diary-details/diary-details.component';
import { DiaryFormComponent } from './diary-form/diary-form.component';
import { StrikethroughDirective } from './strikethrough.directive';


@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    DiaryDetailsComponent,
    DiaryFormComponent,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

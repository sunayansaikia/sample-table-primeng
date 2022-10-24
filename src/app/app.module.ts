import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestReportsComponent } from './test-reports/test-reports.component';

//added later
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestReportService } from './test-reports/testreport.service';
import { FormatTime } from './test-reports/format-time.pipes';
import {CalendarModule} from 'primeng/calendar';



@NgModule({
  declarations: [
    AppComponent,
    TestReportsComponent,
    FormatTime
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CommonModule,
		FormsModule,
		TableModule,
		RatingModule,
		ButtonModule,
		SliderModule,
		InputTextModule,
		ToggleButtonModule,
		RippleModule,
		MultiSelectModule,
		DropdownModule,
		ProgressBarModule,
		ToastModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  providers: [TestReportService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

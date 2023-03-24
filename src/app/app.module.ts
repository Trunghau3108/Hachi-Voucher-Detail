import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";


import { AppRoutingModule }  from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { CurrencyFormatPipe } from './currency-format.pipe';
import { LogInputDirective } from './LogInputDirective';
import { IconsModule } from "@progress/kendo-angular-icons";
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule  } from '@progress/kendo-angular-dropdowns';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { CommonModule } from '@angular/common';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    NavHeaderComponent,
    MainContentComponent,
    CurrencyFormatPipe,
    LogInputDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonsModule,
    BrowserAnimationsModule,
    IconsModule,
    InputsModule,
    DropDownsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    LabelModule,
    DateInputsModule,
    CommonModule,
    

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

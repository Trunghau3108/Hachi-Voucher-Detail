import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule  } from "@angular/common/http";


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
import { DateInputsModule,DatePickerModule} from "@progress/kendo-angular-dateinputs";
import { CommonModule,DatePipe } from '@angular/common';
import { CouponContentComponent } from './components/coupon-content/coupon-content.component';
import { VietnameseMonthPipe } from './vietnamese-month.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GridModule } from '@progress/kendo-angular-grid';
import { ProductsService } from './services/products.service';
import { GridProductComponent } from './components/grid-product/grid-product.component';
import { DatetimepickerComponent } from './components/datetimepicker/datetimepicker.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { TodoAngularComponent } from './todo-angular/todo-angular.component';






// import "@progress/kendo-angular-intl/locales/vi/all";





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    NavHeaderComponent,
    MainContentComponent,
    CurrencyFormatPipe,
    LogInputDirective,
    CouponContentComponent,
    VietnameseMonthPipe,
    GridProductComponent,
    DatetimepickerComponent,
    TodoAngularComponent,
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
    DatePickerModule,
    DatePipe,
    NgbModule,
    GridModule,
    LayoutModule,
    NavigationModule,
    DialogsModule,
  ],
  
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  public date: Date = new Date(); 
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CollapseModule } from 'ng2-bootstrap/collapse';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScrollDirective } from './scroll.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScrollDirective

  ],
  imports: [
    AlertModule.forRoot(),
    DropdownModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

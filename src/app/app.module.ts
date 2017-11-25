import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TitleComponentComponent } from './title-component/title-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

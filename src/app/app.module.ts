import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MenuComponent } from './menu/menu.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    MenuComponent,
    LegalNoticeComponent,
    DataProtectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

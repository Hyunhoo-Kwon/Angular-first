import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { I18nSupportService } from './i18n-support.service';


import { AppComponent } from './app.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { LangSelectorComponent } from './lang-selector/lang-selector.component';
import { LangSelectorBtnPipe } from './lang-selector/lang-selector-btn.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeMsgComponent,
    LangSelectorComponent,
    LangSelectorBtnPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{provide: COMPOSITION_BUFFER_MODE, useValue: false}, I18nSupportService],
  bootstrap: [AppComponent]
})
export class AppModule { }

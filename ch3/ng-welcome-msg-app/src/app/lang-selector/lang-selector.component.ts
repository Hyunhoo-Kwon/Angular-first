import { Component } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent {
  langCode: String;

  constructor(public i18nSupporter: I18nSupportService) {
  	this.langCode = i18nSupporter.langCode;
  }

  setLangCode(langCode) {
  	this.langCode = langCode;
  	this.i18nSupporter.langCode = langCode;
  }

}

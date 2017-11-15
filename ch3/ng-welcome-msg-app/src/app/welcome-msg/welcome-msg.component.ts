import { Component, AfterViewInit } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements AfterViewInit {
  userName = "";
  welcomeMsg: String;
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;

  constructor(public i18nSupporter: I18nSupportService) {

  }

  showWelcomeMsg() {
  	this.welcomeMsg = this.i18nSupporter.getWelcomeMsg(this.userName);
  }

  ngAfterViewInit() {
  	const checkTouchedFn = () => {
  		if(this.valid) return;
  		alert('이름을 입력해 주세요');
  	};

  	setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  }

  onChange() {
  	this.valid = this.userName.length > 0;
  }
}

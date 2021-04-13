
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppSettingsService } from './app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SpaceXLaunch';

  constructor(public appSettings:AppSettingsService,@Inject(PLATFORM_ID) platformId:string)
  {
    if(environment.production && isPlatformBrowser(platformId))
    {
      window.console.log=()=>{}; //Disabling console log on production
    }
  }

}
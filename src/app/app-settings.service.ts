
import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class AppSettingsService
{
    private isLoader=false; //For displaying and hiding the loader
    private isPlatformBrowser=false;
    constructor(@Inject(PLATFORM_ID) platformId:string)
    {
        this.isPlatformBrowser=isPlatformBrowser(platformId);
    }

    public showLoader()
    {
        if(this.isPlatformBrowser)
        {
            this.isLoader=true;
        }

    }

    public get isLoaderDisplaying():boolean
    {
        return this.isLoader;
    }

    public hideLoader()
    { 
        this.isLoader=false;
    }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpaceServeService {
  Url = "https://api.spacexdata.com/v3/launches?";

  constructor(private Http: HttpClient) {}

  getAllLaunches(): Observable<any> {
    return this.Http.get(this.Url);
  }
  // https://api.spacexdata.com/v3/launches?launch_success=true
  getLaunches(param: string): Observable<any> {
    return this.Http.get(this.Url + "launch_success=" + param);
  }

  getLaunches_Land(param: string): Observable<any> {
    return this.Http.get(this.Url + "land_success=" + param);
  }

  getYear(param: string): Observable<any> {
    return this.Http.get(this.Url + "launch_year=" + param);
  }

  getAll(launchYear: string, launchSuccess: string, landSuccess: string): Observable<any> {
    return this.Http.get(
      this.Url +
        "launch_year=" +
        launchYear +
        "&launch_success=" +
        launchSuccess +
        "&land_success=" +
        landSuccess
    );
  }

  getLaunchLand(launchSuccess: string, landSuccess: string): Observable<any> {
    return this.Http.get(
      this.Url +
        "limit=100" +
        "&launch_success=" +
        launchSuccess +
        "&land_success=" +
        landSuccess
    );
  }
}
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Config} from '../model/config/config.model';
import 'rxjs/add/operator/map';
@Injectable()
export  class CallService{

  constructor(
    private http: HttpClient
  ) {
  }

  getJson(){
    return this.http.get<Response>('/assets/config.json').map(res => res);
  }
}

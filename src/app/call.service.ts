import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable()
export  class CallService{

  constructor(
    private http: HttpClient
  ) {
  }

  getJson(){
    return this.http.get('/assets/config.json');
  }
}

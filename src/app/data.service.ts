import {Users} from '../model/user/users.model';
import {EventEmitter} from '@angular/core';

export class DataService{
  // private users: Users[] = [];

  users = new EventEmitter<Users>();


  // getUser(){
  //   return this.users;
  // }
}

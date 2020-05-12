import {Users} from './users.model';
import {EventEmitter} from '@angular/core';

export class DataService{
  // private users: Users[] = [];

  users = new EventEmitter<Users>();


  // getUser(){
  //   return this.users;
  // }
}

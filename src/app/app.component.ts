import {Component, OnInit} from '@angular/core';

import {Users} from '../model/user/users.model';

import {DataService} from './data.service';
import {CallService} from './call.service';
import {Config} from '../model/config/config.model';
import {Header} from '../model/config/header/header.model';
import {Operations} from '../model/config/operations/operations.model';
import {Sort} from '../model/config/operations/sort.model';
import {Pagination} from '../model/config/operations/pagination.model';
import {Search} from '../model/config/operations/search.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit{

  title = 'Terzo Task';
  // For button
  bottone = {type: 'input', name: 'nome', label: '', class: 'btn', href: ''};
  // For Users
  users: Users[] = [];


  strings = [{key: 'nome', value: 'Nome'},
              {key: 'cognome', value: 'Cognome'},
              {key: 'citta', value: 'Città'},
              {key: 'username', value: 'Username'}];

  // For Config
  header: Header[] = this.strings;


  config: Config = new Config(this.header, new Operations(new Sort(true, [
                                                                    'nome',
                                                                    'cognome',
                                                                    'citta'
                                                                  ]),
                                                          new Pagination(5, [5, 10, 15]),
                                                          new Search(true, [
                                                                      'nome',
                                                                      'cognome'
                                                                    ] )));
  ngOnInit(): void {
    console.log(this.config.header);
    console.log(this.config.operations);
  }

}


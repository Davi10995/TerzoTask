import {Component, OnInit, Input} from '@angular/core';

import * as _ from 'lodash';

import {DataService} from '../data.service';
import {Config} from '../../model/config/config.model';
import {Header} from '../../model/config/header/header.model';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data = [];
  // Dichiarazione dei campi header della tabella Users
  @Input() config: Config;
  dataSearch = [];
  constructor(
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    this.dataService.users.subscribe((users) => {
      this.data.push(users);
      this.dataSearch = this.data;
    });
  }

  search(filtro, ricerca){
    if (ricerca === ''){
      this.dataSearch = this.data;
      return;
    }
    if (filtro === 'nome') {
      this.dataSearch = _.filter(this.data, {nome: ricerca});
    }
    else {
      this.dataSearch = _.filter(this.data, {cognome: ricerca});
    }
  }

  sort(filter){
    this.dataSearch = _.sortBy(this.data, [filter]);
  }

  pagination(n){
  }
}

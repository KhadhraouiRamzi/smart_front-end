import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { users } from '../../../models/users';
import { UsersService } from '../../../utils/services/users.service';


@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {
  artistes: users[] = [];
  arts: users[] = [];
  artiste: users;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: { title: 'ID', type: 'string', },
      firstName: { title: 'First Name', type: 'string', },
      lastName: { title: 'Last Name', type: 'string', },
      username: { title: 'Username', type: 'string', },
      email: { title: 'E-mail', type: 'string', },
      age: {   title: 'Age', type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private artisteService: UsersService, private r: Router) {

  }

  ngOnInit(): void {

    const data = this.service.getData();
    this.source.load(data);

    this.artisteService.getArts().subscribe(
      res => {
        this.artistes = res;

         var re ='['
         var ress =res.replace(re, '{')
 
        console.log(data);
        console.log(res);  
        console.log(res.replace(re, '{'));

      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

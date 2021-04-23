import {Component, OnInit} from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import {TokenStorageService} from "../auth/services/token-storage.service";

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit{



   menu = MENU_ITEMS
   role:any;

  constructor(private token: TokenStorageService) {}

  ngOnInit(): void {

    this.role=this.token.getUser()['roles'];

    this.menu.forEach(item => {

      console.log("role of authenticated user ====> "+this.role)

      if(item.data){

        for(let i = 0; i < item.data.length-1; i++ ){

            if (this.role==item.data[i]) {

              item.hidden=false;
              console.log("hide failed !!");

            } else {


              item.hidden=true;
              console.log("hide success !!");
            }
          }
      }
      else if(!item.hidden && item.children!=null){

        item.children.forEach(childrenItem=>{

          if(childrenItem.data){

            for(let i = 0; i < childrenItem.data.length-1; i++ ){
              if (this.role==childrenItem.data[i]) {

                childrenItem.hidden=false;
                console.log("hide failed !!");
                console.log("hide failed !!"+childrenItem.data[i]);
              } else {

                childrenItem.hidden=true;
                console.log("hide success !!");
              }
            }

          }
          else childrenItem.hidden=false;
        })

      }
      else item.hidden=false;

    });

  }

}

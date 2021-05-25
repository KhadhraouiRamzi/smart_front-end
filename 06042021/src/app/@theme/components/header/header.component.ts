import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import {TokenStorageService} from "../../../auth/services/token-storage.service";

import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {users} from "../../../models/users";
import { UsersService } from '../../../utils/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: users;
  currentUser: any;

  themes = [    
    {      value: 'default',      name: 'Light',    },
    {      value: 'dark',      name: 'Dark',    },
    {      value: 'cosmic',      name: 'Cosmic',    },
    {      value: 'corporate',      name: 'Corporate',    },  ];

  currentTheme = 'dark';

  userMenu = [ { title: 'Profile' ,link: '/pages/layout/list-marketing'}, { title: 'Log out' ,link:"logOut()" } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UsersService,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private token: TokenStorageService,private router: Router) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    let u=this.currentUser = this.token.getUser();
    this.userService.getUserById(u.id).subscribe(data=>{
      this.user=data;
    });

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange().pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),takeUntil(this.destroy$), )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange().pipe(map(({ name }) => name),takeUntil(this.destroy$),)
      .subscribe(themeName => this.currentTheme = themeName);
  }

  logOut(){
    sessionStorage.removeItem('auth-user');
    sessionStorage.removeItem('auth-token');
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}

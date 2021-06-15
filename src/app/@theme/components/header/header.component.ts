import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { TokenStorageService } from "../../../auth/services/token-storage.service";

import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { users } from "../../../models/users";
import { UsersService } from '../../../utils/services/users.service';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

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

  themes = [{ value: 'default', name: 'Light', },
  { value: 'dark', name: 'Dark', },
  { value: 'cosmic', name: 'Cosmic', },
  { value: 'corporate', name: 'Corporate', },];

  currentTheme = 'dark';

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
  retrieveResonse: any;
  base64Data: any;
  retrievedImage: any;

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private userService: UsersService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private token: TokenStorageService, private router: Router,
    private httpClient: HttpClient) {
  }

  ngOnInit() {

    this.currentTheme = this.themeService.currentTheme;

    let u = this.currentUser = this.token.getUser();

    this.userService.getUserById(u.id).subscribe(data => {
      this.user = data;

      this.userService.getImage(this.user.id).subscribe(res => {

        if (res.picByte == null) {

          this.retrievedImage = "assets/images/noPhoto.png";
        }

        else this.retrievedImage = 'data:image/jpeg;base64,' + res.picByte;



      })
    });

    this.menuService.onItemClick().subscribe((event) => {
      if (event.item.title === 'Log out') {
        sessionStorage.removeItem('auth-user');
        sessionStorage.removeItem('auth-token');
        this.router.navigate(['/login']);
      }
      if (event.item.title === 'Profile') {
        this.router.navigate(['auth/profile']);
      }
    });

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange().pipe(
      map(([, currentBreakpoint]) => currentBreakpoint.width < xl), takeUntil(this.destroy$))
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange().pipe(map(({ name }) => name), takeUntil(this.destroy$),)
      .subscribe(themeName => this.currentTheme = themeName);
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

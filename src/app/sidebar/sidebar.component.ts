import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user/user';
import { ProfileService } from 'app/services/profile/profile.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {

  constructor(private profile : ProfileService) { }

    public menuItems: any[];
    public user : User;

    ngOnInit() {
        this.profile.profile().subscribe(data=>{
          this.user = data;
        },err=>{
          alert(err);
        })

        switch(this.user.roles[0]){
          case "ADMIN":
            this.menuItems = [
              { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
              { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
              { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
              { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
              { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
              { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
              { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
              { path: '/logout',       title: 'Deconnexion',    icon:'nc-spaceship',  class: 'active-pro' },
            ];
            break;

          case "USER":
            this.menuItems = [
              { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
              { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
              { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
              { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
              { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
              { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
              { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
              { path: '/logout',       title: 'Deconnexion',    icon:'nc-spaceship',  class: 'active-pro' },
            ];
            break;

          default:
            this.menuItems = [
              { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
              { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
              { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
              { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
              { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
              { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
              { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
              { path: '/logout',       title: 'Deconnexion',    icon:'nc-spaceship',  class: 'active-pro' },
            ];

        }
    }
}
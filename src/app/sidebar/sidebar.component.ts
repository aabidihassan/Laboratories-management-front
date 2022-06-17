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
          switch(this.user.roles[0].libelle){
            case "ADMIN":
              this.menuItems = [
                { path: '/user',          title: 'Profile',      icon:'nc-single-02',  class: '' },
                { path: '/labos',         title: 'Laboratoires',             icon:'nc-bullet-list-67',    class: '' },
                { path: '/logout',       title: 'Deconnexion',    icon:'nc-user-run',  class: 'active-pro' },
              ];
              break;

            case "USER":
              this.menuItems = [
                { path: '/user',          title: 'Profile',      icon:'nc-single-02',  class: '' },
                { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
                { path: '/budgetspersonnel',          title: 'Budgets Personnel',              icon:'nc-cart-simple',      class: '' },
                { path: '/logout',       title: 'Deconnexion',    icon:'nc-user-run',  class: 'active-pro' },
              ];
              break;

            case "RESPO":
              this.menuItems = [
                { path: '/user',          title: 'Profile',      icon:'nc-single-02',  class: '' },
                { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
                { path: '/labos',         title: 'Les employes',             icon:'nc-badge',    class: '' },
                { path: '/budgets/',         title: 'Les budgets',             icon:'nc-money-coins',    class: '' },
                { path: '/budgetspersonnel',          title: 'Budgets Personnel',              icon:'nc-cart-simple',      class: '' },
                { path: '/logout',       title: 'Deconnexion',    icon:'nc-user-run',  class: 'active-pro' },
              ];
              break;

          }
          localStorage.setItem("user", JSON.stringify(this.user))
        },err=>{
          alert(err);
        })



        //this.menuItems = ROUTES.filter(menuItem => menuItem);

    }
}

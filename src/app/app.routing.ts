import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ListBesoinsComponent } from './pages/besoins/list-besoins/list-besoins.component';
import { ListeBesoinsComponent } from './pages/besoins/liste-besoins/liste-besoins.component';
import { NewBesoinComponent } from './pages/besoins/new-besoin/new-besoin.component';
import { DivisionComponent } from './pages/budgets/division/division.component';
import { ListComponent } from './pages/budgets/list/list.component';
import { NewComponent } from './pages/budgets/new/new.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IconsComponent } from './pages/icons/icons.component';
import { ListelabosComponent } from './Pages/listelabos/listelabos.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NewlaboComponent } from './pages/newlabo/newlabo.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { TableComponent } from './pages/table/table.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { UpgradeComponent } from './pages/upgrade/upgrade.component';
import { UserComponent } from './pages/user/user.component';

export const AppRoutes: Routes = [

  { path: '', component: LoginComponent  },
  {
    path: '', component : AdminLayoutComponent ,
    children:
      [
        { path: 'dashboard',      component: DashboardComponent },
        { path: 'user',           component: UserComponent },
        { path: 'table',          component: TableComponent },
        { path: 'typography',     component: TypographyComponent },
        { path: 'icons',          component: IconsComponent },
        { path: 'maps',           component: MapsComponent },
        { path: 'notifications',  component: NotificationsComponent },
        { path: 'upgrade',        component: UpgradeComponent },
        { path: 'labos',   children:[
          { path: '',        component: ListelabosComponent },
          { path: 'new',        component: NewlaboComponent },
        ] },
        { path: 'budgets', children:[
          { path: '',        component: ListComponent },
          { path: 'newbudget',        component: NewComponent },
          { path: 'division',        component: DivisionComponent },
        ] },
        { path: 'budgetspersonnel', children:[
          { path: '',        component: ListBesoinsComponent },
          { path: 'besoins',  children:[
            { path: '',        component: ListeBesoinsComponent },
            { path: 'new',        component: NewBesoinComponent },
          ]},
        ] },

      ]
  },
  { path: 'logout', component: LogoutComponent},
  { path: '**',component   : NotfoundComponent},

]

import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IconsComponent } from './pages/icons/icons.component';
import { MapsComponent } from './pages/maps/maps.component';
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
        { path: 'upgrade',        component: UpgradeComponent }
      ]
  },
  /*** its need to be always in the last A Mon cheff hassane */
  // { path: '**',component   : WrongRouteComponent},

]






  // // {
  // //   path: '',
  // //   redirectTo: 'dashboard',
  // //   pathMatch: 'full',
  // // },
  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   children: [
  //       {
  //     path: '',
  //     loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  // }]},
  // // {
  // //   path: '**',
  // //   redirectTo: 'dashboard'
  // // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // }

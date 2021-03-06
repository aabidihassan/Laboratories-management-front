import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './auth/login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { LogoutComponent } from './auth/logout/logout.component';
import { NewlaboComponent } from './pages/newlabo/newlabo.component';
import { ListelabosComponent } from './Pages/listelabos/listelabos.component';
import { ListComponent } from './pages/budgets/list/list.component';
import { NewComponent } from './pages/budgets/new/new.component';
import { DivisionComponent } from './pages/budgets/division/division.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './pages/budgets/division/modal/modal.component';
import { ListBesoinsComponent } from './pages/besoins/list-besoins/list-besoins.component';
import { NewBesoinComponent } from './pages/besoins/new-besoin/new-besoin.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ListeBesoinsComponent } from './pages/besoins/liste-besoins/liste-besoins.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    LogoutComponent,
    NewlaboComponent,
    ListelabosComponent,
    ListComponent,
    NewComponent,
    DivisionComponent,
    ModalComponent,
    ListBesoinsComponent,
    NewBesoinComponent,
    NotfoundComponent,
    ListeBesoinsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

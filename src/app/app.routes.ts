import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'login', component:LoginComponent},
    {path:'welcome/:name', component:WelcomeComponent, canActivate: [RouteGuardService]},
    {path:'todos', component:ListTodosComponent, canActivate: [RouteGuardService]},
    {path:'logout', component:LogoutComponent, canActivate: [RouteGuardService]},
    {path:'**', component:ErrorComponent}
];

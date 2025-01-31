import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OutputComponent } from './output/output.component';
import { StoreComponent } from './store/store.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component: LoginComponent 
    },
    {
        path:'register',
        component: RegisterComponent  
    },
    {
        path:'output',
        component: OutputComponent 
    },
    {
        path:'store',
        component:StoreComponent 
    }
];

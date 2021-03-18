import { Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { GetComponent } from './pages/get/get.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { UpdateComponent } from './pages/update/update.component';

export const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'get/:userId',
        component: GetComponent
    },
    {
        path: 'update/:userId',
        component: UpdateComponent
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
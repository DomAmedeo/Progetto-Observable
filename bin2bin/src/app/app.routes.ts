import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { List } from './components/list/list';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch: "full"},
    {path:"home", component: Home },
    {path:"list", component:List}
];

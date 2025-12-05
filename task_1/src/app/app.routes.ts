import { Routes } from '@angular/router';
import { Elenco } from './components/elenco/elenco';
import { ProvaSAPF } from './components/prova-sapf/prova-sapf';

export const routes: Routes = [
    {
        path:'', redirectTo:'elenco', pathMatch:'full'
    },
    {
        path:'elenco', component:Elenco
    },
    {path:'prova', component:ProvaSAPF}
];

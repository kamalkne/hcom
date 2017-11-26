import { RouterModule, Routes }     from '@angular/router';

import { AppComponent }             from './components/app.component';
import { AboutComponent }           from './components/about.component';
import { HomeComponent }            from './components/home.component';
import { ErrorComponent }           from './components/error.component';

const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Heroes List' }
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: ErrorComponent }
];

export const routing = RouterModule.forRoot(appRoutes);

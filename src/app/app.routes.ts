import { Routes } from '@angular/router';
import { LandingPage } from './features/landing-page/component/landing-page';
import { InfoPage } from './features/info-page/component/info-page';
import { Login } from './features/login/component/login';
import { About } from './features/about/component/about';
import { Solutions } from './features/solutions/components/solutions';
import { Contact } from './features/contact/component/contact';

export const routes: Routes = [
    { path: '', redirectTo: 'land', pathMatch:'full'},
    { path: 'land', component: LandingPage},
    { path: 'services', component: InfoPage},
    { path: 'login', component: Login},
    { path: 'about', component: About},
    { path: 'solutions', component: Solutions},
    { path: 'contact', component: Contact},

];

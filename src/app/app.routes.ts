import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { register } from 'module';
import { RegisterComponent } from './register/register.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { PcComponent } from './pc/pc.component';
import { TvComponent } from './tv/tv.component';
import { PhoneComponent } from './phone/phone.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    
    {path:"register",component:RegisterComponent},
    {path:"accueil",component:AccueilComponent},
    {path:"pc",component:PcComponent},
    {path:"tv",component:TvComponent},
    {path:"phone",component:PhoneComponent}
    
];

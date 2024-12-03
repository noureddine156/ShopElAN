import { RouterLinkWithHref, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PcComponent } from './pc/pc.component';
import { TvComponent } from './tv/tv.component';
import { PhoneComponent } from './phone/phone.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';


import { RouterModule, RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

// Firebase
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from './environment';



export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"",component:AccueilComponent},
    {path:"pc",component:PcComponent},
    {path:"tv",component:TvComponent},
    {path:"phone",component:PhoneComponent},
    {path:"contact",component:ContactComponent}
    
];



@NgModule({
  declarations: [],
    imports: [
      CommonModule,
      MatButtonModule,
      RouterLinkWithHref,
      RouterModule,
      RouterOutlet,
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireAuthModule,
      AngularFirestoreModule,
    ],
    providers: [],
  })
  
export class AppRoutingModule {}
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule,FlexLayoutModule,MatFormFieldModule,MatInputModule
  ,MatButtonModule,MatToolbarModule,MatIconModule,MatDividerModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  error: string = "";

  constructor (private router:Router){}
  gotologin(){
    this.router.navigate(['/']);
  //   console.log('Full Name:', this.fullName);
  //   console.log('Email:', this.email);
  //   console.log('Password:', this.password);
  //   console.log('Confirm Password:', this.confirmPassword);
  //   if(this.fullName && this.email && this.password && this.confirmPassword){
  //       this.auth
  //         .createUserWithEmailAndPassword(this.email, this.password)
  //         .then((user) => {
  //           console.log('Account created:', user);
  //           this.error = "Account Created";
  //         })
  //         .catch((error) => {
  //           console.error('Signup error:', error);
  //           this.error = "Signup erro";
  //         })
  //   } else {
  //     this.error = "yehdik rabi 3abi hak inputs";
  //   }
  }

}

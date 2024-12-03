import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FlexLayoutModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatToolbarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  
  
})
export class LoginComponent {
  
  login(){
    alert("hi");
  }
}

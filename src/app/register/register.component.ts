import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FlexLayoutModule,MatFormFieldModule,MatInputModule
  ,MatButtonModule,MatToolbarModule,MatIconModule,MatDividerModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor (private router:Router){

  }
  gotologin(){
    this.router.navigate(['/Login']);
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from "./header/header.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MatCardModule, FlexLayoutModule,RouterModule,RouterOutlet,
        MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, HeaderComponent, AccueilComponent],
    
})
export class AppComponent {
  title = 'mywebsite';
}

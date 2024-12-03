import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pc',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatDividerModule,MatButtonModule],
  templateUrl: './pc.component.html',
  styleUrl: './pc.component.css'
})
export class PcComponent {
  products: any [] = [];
  acheter(prod: any){
    console.log(prod)
  }
}

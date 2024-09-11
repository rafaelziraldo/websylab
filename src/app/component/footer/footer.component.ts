import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
@Input() sections: { label: string, route: string }[] = [
  {label:'novias',route:''},
  {label:'quince',route:''},
  {label:'egresadas',route:''},
  {label:'vastidos de fiestas',route:''},
  {label:'moda sostenible',route:''},
  {label:'vastidos de fiestas',route:''},
  {label:'moda sostenible',route:''},
  {label:'vastidos de fiestas',route:''},
  {label:'moda sostenible',route:''},
  {label:'quienes somos',route:''}];

}

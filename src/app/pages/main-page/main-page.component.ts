import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/component/navbar/navbar.component';
import { FooterComponent } from 'src/app/component/footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

}

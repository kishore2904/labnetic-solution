import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { AboutComponent } from '../about/about.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,AboutComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  toggleMenu(): void {
    const menu: HTMLElement | null = document.querySelector(".menu-links");
    const icon: HTMLElement | null = document.querySelector(".hamburger-icon");

    if (menu && icon) {
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }
  }
}

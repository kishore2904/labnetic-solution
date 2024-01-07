import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,AboutComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.componentpart2.css','./mediaqueries.css']
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

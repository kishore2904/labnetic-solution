import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css','./about.componentpart2.css','./mediaqueries.css']
})
export class AboutComponent {
  toggleMenu(): void {
    const menu: HTMLElement | null = document.querySelector(".menu-links");
    const icon: HTMLElement | null = document.querySelector(".hamburger-icon");

    if (menu && icon) {
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }
  }
}

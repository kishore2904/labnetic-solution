import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./header.componentpart2.css',
'./mediaqueries.css']
})


export class HeaderComponent {
  toggleMenu(): void {
    const menu: HTMLElement | null = document.querySelector(".menu-links");
    const icon: HTMLElement | null = document.querySelector(".hamburger-icon");

    if (menu && icon) {
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }
  }
}

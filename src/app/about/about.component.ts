import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from '../services/services.component';
interface Paragraph {
  content: string;
  visible: boolean;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,ServicesComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  show = false;
  close = true;
  toggleParagraphs(){
    this.close = !this.close;
    this.show = !this.show;
  }
  toggleParagraphsClose(){
    this.close = !this.close;
    this.show = !this.show;
  }
  
}

import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';


@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

}

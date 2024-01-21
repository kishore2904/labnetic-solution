import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { PricingComponent } from '../pricing/pricing.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [PricingComponent,FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}

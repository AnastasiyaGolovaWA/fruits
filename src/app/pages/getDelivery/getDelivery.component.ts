import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiDeliveryControllerService, DeliveryResponseDto } from 'api';

@Component({
  selector: 'app-get-delivery',
  templateUrl: './getDelivery.component.html',
  styleUrls: ['./getDelivery.component.scss']
})
export class GetDelivery {
  id!: number;
  delivery?: DeliveryResponseDto; 

  constructor(private deliveryService: ApiDeliveryControllerService, private changeDetectorRef: ChangeDetectorRef) { }

  generateReport(): void {
    this.deliveryService.getDeliveryById({ deliveryId: this.id})
      .subscribe(
        (delivery: DeliveryResponseDto) => {
          this.delivery = delivery;
          this.changeDetectorRef.markForCheck(); 
        }
      );
  }

}
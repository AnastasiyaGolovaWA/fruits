/* tslint:disable */
/* eslint-disable */
import { FruitDeliveryDto } from './fruit-delivery-dto';
export interface DeliveriesDto {
  deliveryDate?: string;
  fruitIds?: Array<FruitDeliveryDto>;
  supplierId?: number;
}

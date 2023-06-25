/* tslint:disable */
/* eslint-disable */
import { ItemResponseDto } from './item-response-dto';
import { Supplier } from './supplier';
export interface DeliveryResponseDto {
  deliveryDate?: string;
  deliveryId?: number;
  items?: Array<ItemResponseDto>;
  supplier?: Supplier;
}

/* tslint:disable */
/* eslint-disable */
import { FruitReportDto } from './fruit-report-dto';
import { Supplier } from './supplier';
export interface ReportDto {
  fruitReportDTO?: Array<FruitReportDto>;
  supplier?: Supplier;
  totalPrice?: number;
  totalWeight?: number;
}

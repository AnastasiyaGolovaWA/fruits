import { ChangeDetectorRef, Component } from '@angular/core';
import { ReportDto } from 'api/models/report-dto';
import { ApiReportControllerService } from 'api/services/api-report-controller.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  startDate!: string;
  endDate!: string;
  reports?: ReportDto; 

  constructor(private reportService: ApiReportControllerService, private changeDetectorRef: ChangeDetectorRef) { }

  generateReport(): void {
    this.reportService.generateReport({ startDate: this.startDate, endDate: this.endDate })
      .subscribe(
        (reports: ReportDto) => {
          this.reports = reports;
          this.changeDetectorRef.markForCheck(); 
        }
      );
  }
}

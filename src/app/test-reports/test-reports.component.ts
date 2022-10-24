import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TestReport } from './testreport';
import { TestReportService } from './testreport.service';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';


interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-test-reports',
  templateUrl: './test-reports.component.html',
  styleUrls: ['./test-reports.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class TestReportsComponent implements OnInit {

  testReports: TestReport[] = [];

  statuses: any[] = [];

  rowGroupMetadata: any;

  expandedRows: expandedRows = {};

  activityValues: number[] = [0, 100];

  isExpanded: boolean = false;

  idFrozen: boolean = false;

  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private testReportService: TestReportService) { }
  ngOnInit() {
    this.testReportService.getReports().then(reports => {
      this.testReports = reports;
      this.loading = false;

      // @ts-ignore
      this.testReports.forEach(report => report.date = new Date(report.date));
    });


    this.statuses = [
      { label: 'Running', value: 'running' },
      { label: 'Completed', value: 'completed' },
    ];
  }


  formatCurrency(value: number) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  redirectToReport(){
    console.log("redirectToReport(): Called...");
  }

}

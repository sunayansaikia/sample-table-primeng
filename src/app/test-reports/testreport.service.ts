import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestReport } from './testreport';

@Injectable()
export class TestReportService {

    constructor(private http: HttpClient) { }

    getReports() {
        return this.http.get<any>('assets/demo/data/test-reports-small.json')
            .toPromise()
            .then(res => res.data as TestReport[])
            .then(data => data);
    }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestReportsComponent } from './test-reports/test-reports.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
        {
            path: '', component: TestReportsComponent, 
            children: [
                { path: '', component: TestReportsComponent }
            ]
        }
    ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }

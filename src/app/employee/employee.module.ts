import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { CapitalizePipe } from '../capitalize.pipe';
import { SharedModule } from '../shared/shared.module';
import { EmployeeRouteModule } from '../routes/employee-route/employee-route.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeComponent,
                EmployeeDetailComponent,
                CapitalizePipe
              ],
  imports: [
    EmployeeRouteModule,
    SharedModule,
    FormsModule
  ]
})
export class EmployeeModule { }

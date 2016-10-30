import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { PersonnelComponent } from './personnel.component';

import { DepartmentrightComponent } from './department-right/department-right.component';
import { DepartmentcontentComponent } from './departmentcontent/departmentcontent.component';
import { DepartmentCreateComponent } from './departmentcreate/create.component';
import { DepartmentDetailComponent } from './departmentdetail/departmentdetail.component';

import { StaffcreatComponent } from './staffcreat/staffcreat.component';
import { StaffdetailComponent } from './staffdetail/staffdetail.component';
import { StaffrightComponent } from './staff-right/staff-right.component';
import { StaffcontentComponent } from './staffcontent/staffcontent.component';

import { DepartmentSelectComponent } from '../formcomponents/department-select.component';
//模块路由
import { personnelRouting } from './personnel.routing';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        personnelRouting,
    ],
    declarations:[
        PersonnelComponent,

        DepartmentrightComponent,
        DepartmentcontentComponent,
        DepartmentCreateComponent,
        DepartmentDetailComponent,
        
        StaffcontentComponent,
        StaffcreatComponent,
        StaffdetailComponent,
        StaffcreatComponent,
        StaffrightComponent,

        DepartmentSelectComponent,
    ],
    exports:[
    ],
    providers:[
        
    ]
})

export class PersonnelModule {}

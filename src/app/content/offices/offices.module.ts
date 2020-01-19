import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { MapComponent } from './map/map.component';
import { OfficesService } from './offices.service';

import { AvatarModule } from 'ngx-avatar';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/shared/shared.module';
import { OfficeComponent } from './office/office.component';

const routes: Routes = [
    {
        path     : 'list',
        component: ListComponent,
        resolve  : {
            offices: OfficesService
        }
    },
    {
        path     : 'grid',
        component: GridComponent,
        resolve  : {
            offices: OfficesService
        }
    },
    {
        path     : 'map',
        component: MapComponent,
        resolve  : {
            offices: OfficesService
        }
    },
    {
        path: '**',
        redirectTo: 'list'
    }
];

@NgModule({
    declarations: [
        ListComponent,
        GridComponent,
        MapComponent,
        OfficeComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,

        SharedModule,
        
        MatCardModule,
        MatSnackBarModule,
        AvatarModule
    ],
    providers: [
        OfficesService
    ]
})
export class OfficesModule { }

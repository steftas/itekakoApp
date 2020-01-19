import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OfficesModule } from './offices/offices.module';

const routes = [
    {
        path: 'offices',
        loadChildren: './offices/offices.module#OfficesModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        OfficesModule
    ]
})
export class ContentModule { }
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        MatToolbarModule,
        RouterModule
    ],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule { }

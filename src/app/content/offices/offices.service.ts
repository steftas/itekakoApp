import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Office } from './office';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class OfficesService implements Resolve<any> {
    baseURL: string = 'https://itk-exam-api.herokuapp.com/api/offices';

    constructor(
        private _httpClient: HttpClient,
        private _snackBar: MatSnackBar
    ) { }

    resolve(): any {
        return this.getOffices()
    };

    getOffices(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.baseURL).subscribe((response: Array<Office>) => {
                resolve(response);
            }, (error: HttpErrorResponse) => {
                this._snackBar.open(error.message, null, {duration: 3000});
                reject(error)
            });
        });
    }
}

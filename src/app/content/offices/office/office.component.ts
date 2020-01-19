import { Component, OnInit, Input } from '@angular/core';
import { Office } from '../office';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit {
  @Input() office: Office;
  @Input() view: string;

  constructor() { }

  ngOnInit(): void { }
}

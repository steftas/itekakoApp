import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Office } from '../office';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  offices: Array<Office> = [];
  
  constructor(
    private route: ActivatedRoute
  ) {
    this.offices = this.route.snapshot.data.offices;
  }

  ngOnInit(): void {}
}

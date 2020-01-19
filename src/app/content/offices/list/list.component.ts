import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Office } from '../office';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  offices: Array<Office> = [];

  constructor(
    private route: ActivatedRoute
  ) {
    this.offices = this.route.snapshot.data.offices;
  }

  ngOnInit(): void {}
}

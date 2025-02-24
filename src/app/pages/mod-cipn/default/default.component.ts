import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-default-dashboard',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultDashboardComponent implements OnInit, AfterViewInit {

  breadCrumbItems: Array<{}>;

  constructor(private eref: ElementRef) {

  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'Dashboard', path: '/', active: true }];
  }

  ngAfterViewInit() { }


}

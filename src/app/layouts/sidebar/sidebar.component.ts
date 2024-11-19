import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import MetisMenu from 'metismenujs/dist/metismenujs';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() isCondensed = false;
  menu: any;

  @ViewChild('sideMenu', { static: false }) sideMenu: ElementRef;

  constructor(
    private auth: AuthenticationService,
    private router: Router,) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.menu = new MetisMenu(this.sideMenu.nativeElement);
  }

  ngOnChanges() {
    if (!this.isCondensed && this.sideMenu) {
      setTimeout(() => {
        this.menu = new MetisMenu(this.sideMenu.nativeElement);
      });
    } else if (this.menu) {
      this.menu.dispose();
    }
  }
  lnk(strlnk) {
    console.log("lnk : ", strlnk)
    this.router.navigate([strlnk]);
  }
}

import { Component, ViewEncapsulation, ViewChild, OnInit, HostListener } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;
  navMode = 'side';
  folders = [
    { name: 'Centros' },
    { name: 'Productos' }
  ];

  constructor() {}

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.navMode = 'over';
    }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      if (event.target.innerWidth < 768) {
        this.navMode = 'over';
        this.sidenav.close();
      }
      if (event.target.innerWidth > 768) {
        this.navMode = 'side';
        this.sidenav.open();
      }
    }
}

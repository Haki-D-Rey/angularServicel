import { Component, HostListener, OnInit } from '@angular/core';
import { SidenavToggle } from '../../interfaces/Interface';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.scss'],
})
export class AdminComponentComponent implements OnInit {
  width!: number;
  isSideNavCollapsed = false;
  screenWidth = 0;
  constructor() {
    this.onResize();
  }

  ngOnInit(): void {}

  onToggleSideNav(data: SidenavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
  }
}

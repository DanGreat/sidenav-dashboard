import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { navData } from './nav-data';

interface SideNavToggle {
  screenWidth: number,
  collapsed: boolean
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter()
  collapsed: boolean = false
  screenWidth = 0
  navigationData = navData

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit({ screenWidth: this.screenWidth, collapsed: this.collapsed })
  }

  closeNav() { 
    this.collapsed = false
    this.onToggleSideNav.emit({ screenWidth: this.screenWidth, collapsed: this.collapsed })
  }

}

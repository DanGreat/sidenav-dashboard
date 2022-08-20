import { Component, Input } from '@angular/core';

interface SideNavToggle {
  screenWidth: number,
  collapsed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'dashboard-design';
  isSideNavCollapsed = false;
  screenWidth = 0

  constructor() {}

  onToggleSideNav(data: SideNavToggle) {
    this.isSideNavCollapsed = data?.collapsed
    this.screenWidth = data?.screenWidth
  }

  getBodyClass() {
    let styleClass = ''

    if(this.isSideNavCollapsed && this.screenWidth > 768) styleClass = 'body-trimmed'
    else if(this.isSideNavCollapsed && this.screenWidth <= 768) styleClass = 'body-md-screen '
    
    return styleClass
  }
}

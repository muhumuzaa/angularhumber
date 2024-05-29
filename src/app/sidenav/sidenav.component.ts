import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

export type MenuItem = {
  icon: string;
  name: string;
  route?: string
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  

menuItems = <MenuItem[]>([
  {icon: 'home',
  name: 'Home',
  route: 'home'
},
{icon: 'person',
  name: 'About me',
  route: 'about'
},
  {icon: 'design_services',
  name: 'Services',
  route: 'services'
},
{icon: 'dashboard',
  name: 'Projects',
  route: 'projects'
},
{icon: 'phone',
  name: 'Contacts',
  route: 'contacts'
}
])

  constructor() { }

  ngOnInit(): void {
  }

  

}

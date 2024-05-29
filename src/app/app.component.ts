import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import {BreakpointObserver} from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'engtwo';

  collapsed= true;
  
  ToggleMenu(){
    this.collapsed= !this.collapsed;
    
  }

  // @ViewChild(MatSidenav) 
  // sideNav!: MatSidenav;

  // /**
  //  *
  //  */
  // constructor(private observer: BreakpointObserver) {}

  // ngAfterViewInit(){
  //   this.observer.observe(['max-width:800px']).subscribe((res)=>{
  //     if(res.matches){
  //       this.sideNav.mode = 'over';
  //       this.sideNav.close();
  //     }else{
  //       this.sideNav.mode ='side';
  //       this.sideNav.open;
  //     }
  //   })
  // }

}





import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-servicecard',
  templateUrl: './servicecard.component.html',
  styleUrls: ['./servicecard.component.css'],
  
  
})
export class ServicecardComponent implements OnInit {
  @Input() artist!: {title: string, description: string};


  constructor() {
  
   }

  ngOnInit(): void {
    
  }

}

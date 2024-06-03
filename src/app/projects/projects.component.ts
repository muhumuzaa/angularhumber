import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projData!: any


  constructor(private http: HttpClient) { 
   
  }

  ngOnInit(): void {
    this.http.get<any>('../assets/data.json').subscribe(mydata =>{
      this.projData = mydata;
      console.log(this.projData)
    })
  }

}

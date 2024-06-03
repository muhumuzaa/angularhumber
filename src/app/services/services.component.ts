import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  artists: any;

  constructor(private http: HttpClient) {
    
   }

  ngOnInit(): void {
    this.http.get<any>('../assets/data.json').subscribe(data =>{
      this.artists = data;
    
      console.log(this.artists);

    },error => {
      console.error('Error fetching data:', error);
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  // noCards: any

  //using observable
  // public projData$ = this.http.get<any>('../assets/data.json');


  // constructor(private http: HttpClient) { 
   
  // }

  myprojects = [
    {
      "title": "Facial Recognition Attendance System",
      "description": "A facial recognition attendance system that uses the facial recognition framework to authenticate users while also authenticating their liveness agianst spoof attacks.",
      "features": ["Anti-spoofing- detects fakes eg photos", "Automatically tracks user attendance", "user interface", "fast "],
      "technologies": ["Face detection framework","CV2","Python"]
      
    },
    {
      "title": "Weather Forecaster",
      "description": "This project is being divided into two modules, Data Gathering & Pre-processing, and Prediction Algorithm. This app is well-capable in predicting 6-7 days (up to) data sets and will fetch weather details on an hourly basis. It will also offer users to change location.",
      "features": ["Predict the amount of Rainfall (in inches).", "Get specific weather for specific region", "measure temperature, humidity, wind speed, etc."],
      "technologies": ["Jupyter Notebook", "Sci-kit learn lib", "Python"]
      
    },
    {
      "title": "Local Train Ticketing System",
      "description": "This a simple Java-based ticketing platform by which users can book tickets as per their choices for traveling in local trains. Users will have the option to choose the number of seats, class, and journey date, along with the source and destination. ",
      "features": ["Booking Panel", "Schedules", "User Panel", "Admin "],
      "technologies": ["SDK","JDK","SQL"]
      
    },
    {
      "title": "Local Train Ticketing System",
      "description": "This a simple Java-based ticketing platform by which users can book tickets as per their choices for traveling in local trains. Users will have the option to choose the number of seats, class, and journey date, along with the source and destination. ",
      "features": ["Booking Panel", "Schedules", "User Panel", "Admin "],
      "technologies": ["JDK","SQL","Kivy"]
      
    },
    {
      "title": "Local Train Ticketing System",
      "description": "This a simple Java-based ticketing platform by which users can book tickets as per their choices for traveling in local trains. Users will have the option to choose the number of seats, class, and journey date, along with the source and destination. ",
      "features": ["Booking Panel", "Schedules", "User Panel", "Admin "],
      "technologies": ["SDK","JDK","SQL"]
      
    }

  ]


  ngOnInit(): void {
    // this.http.get<any>('../assets/data.json').subscribe(mydata =>{
    //   this.projData = mydata;
    //   console.log(this.projData)
    // })
  }

}

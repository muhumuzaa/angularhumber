import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  myservices = [
    {
      "title": "Web Development",
      "description": "My portfolio covers many development projects, including custom website development services, web portal development, web integration services, and more.",
      "features": ["Anti-spoofing- detects fakes eg photos", "Automatically tracks user attendance", "user interface", "fast "],
      "technologies": ["Face detection framework","CV2","Python"]
      
    },
    {
      "title": "Mobile App Development",
      "description": "No matter your target audience, device, or platform, I the perfect mobile app solutions for you ensuring unparalleled experiences across iOS and Android devices.",
      "features": ["Predict the amount of Rainfall (in inches).", "Get specific weather for specific region", "measure temperature, humidity, wind speed, etc."],
      "technologies": ["Jupyter Notebook", "Sci-kit learn lib", "Python"]
      
    },
    {
      "title": "Consulting",
      "description": "Consulting services give your business a lifeline when you are not sure how to proceed. I will patiently guide you through whatever challenge you are trying to solve.",
      "technologies": ["SDK","JDK","SQL"],
      "features": ["Anti-spoofing- detects fakes eg photos", "Automatically tracks user attendance", "user interface", "fast "]
    },
    {
      "title": "DevOps",
      "description": "This a simple Java-based ticketing platform by which users can book tickets as per their choices for traveling in local trains. Users will have the option to choose the number of seats, class, and journey date, along with the source and destination. ",
      "features": ["Booking Panel", "Schedules", "User Panel", "Admin "],
      "technologies": ["JDK","SQL","Kivy"]
      
    },
    {
      "title": "Hire Developers",
      "description": "Hiring, training, maintaining and managing developers is a hassle and a full time job. Let us eliviate you of all the trouble by offering you a team of tried and tested software developers. ",
      "features": ["Booking Panel", "Schedules", "User Panel", "Admin "],
      
      
    }

  ]

  constructor() {
    
   }

  ngOnInit(): void {

  }

}

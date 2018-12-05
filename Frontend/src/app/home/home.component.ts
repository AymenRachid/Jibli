import { Component, OnInit } from '@angular/core';
import { Item } from '../Models/Item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items:Item[];
  
  constructor() { }

  ngOnInit() {
    
    
  }

}

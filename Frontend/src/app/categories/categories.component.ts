import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  category: Array<String>;
  constructor() { }

  ngOnInit() {
    this.category = ['High Tech', 'Drugs', 'Slaves']
  }

}

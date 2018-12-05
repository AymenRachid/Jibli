import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  type:String;
  otherType:String;
  constructor() { }

  ngOnInit() {
    this.type = "Offer"
    this.otherType = "Demand"
  }
  swapType(){
    var temp = this.type
    this.type = this.otherType;
    this.otherType = temp;
  }

}

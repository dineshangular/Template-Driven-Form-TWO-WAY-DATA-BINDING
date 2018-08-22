import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  model:any = { } // Update the property at the same time display the value of the property.

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    alert(JSON.stringify(this.model)); // return the value in json format
  }

}

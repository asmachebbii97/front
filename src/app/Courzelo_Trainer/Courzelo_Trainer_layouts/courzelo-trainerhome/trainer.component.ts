import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  isShow!:boolean;
  constructor() { }
  ngOnInit(): void {
  }
  addItem(newItem: boolean) {
    this.isShow=newItem;
   }


}

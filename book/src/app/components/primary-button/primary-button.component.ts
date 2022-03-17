import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {
  @Input()
  label!:string;

  @Input()
  color!:string;
  
  @Output()
  onViewDetails = new EventEmitter<any>();

  constructor() { }
  
  ngOnInit(): void {
  }

  clickViewDetails(index:number){
    this.onViewDetails.emit({id: index})
  }
}

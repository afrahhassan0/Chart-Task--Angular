import { Component, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent {
  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { } 

}

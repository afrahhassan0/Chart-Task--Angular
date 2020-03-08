import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  private listToggle: HTMLElement;

  constructor() {
   
   }

  ngOnInit(): void {
    this.listToggle = document.getElementById('list');
  }

  showNav(){
    this.listToggle.classList.toggle('hide');
    this.listToggle.parentElement.classList.toggle('collapsed');
  }

  checkIfActive(element: HTMLElement){
    if( element.classList.contains("active") ){
      element.classList.add("setColor")
    }
  }

  resetIfNeeded(element){
    if(element.classList.contains("active") ){
      element.classList.remove("setColor")
    }
  }

}

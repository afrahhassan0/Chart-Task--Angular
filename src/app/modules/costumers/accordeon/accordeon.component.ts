import { Component, ContentChildren, QueryList , AfterContentInit, Query } from '@angular/core';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-accordeon',
  templateUrl: './accordeon.component.html',
  styleUrls: ['./accordeon.component.css']
})
export class AccordeonComponent implements AfterContentInit {
  @ContentChildren(PanelComponent) panels: QueryList<PanelComponent>= new QueryList<PanelComponent>();

  constructor() { }

  ngAfterContentInit(){ 
    this.panels.forEach( (panel: PanelComponent) => {
      
      panel.togglePanel.subscribe( ()=>{
        this.openPanel( panel );
        console.log(panel);
      })
    });
  }

  private openPanel( panel: PanelComponent ):void{
    if(panel.isOpen == false)
      this.panels.forEach( panel => panel.isOpen=false);
    panel.isOpen = !panel.isOpen;
  }



}

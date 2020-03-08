import { Component, OnInit } from '@angular/core';
import { Shippers } from 'src/app/models/Shippers';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-shippers',
  templateUrl: './shippers.component.html',
  styleUrls: ['./shippers.component.css']
})
export class ShippersComponent implements OnInit {
  shipperData: Shippers[];

  constructor( private api: ApiService ) { }

  ngOnInit(): void {
    this.api.getShippers().subscribe(res=>{
      this.shipperData = res;
    })
  }

  toggleActive(){
    
  }

}

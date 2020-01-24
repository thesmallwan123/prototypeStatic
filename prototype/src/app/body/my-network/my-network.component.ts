import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-my-network',
  templateUrl: './my-network.component.html',
  styleUrls: ['./my-network.component.scss']
})
export class MyNetworkComponent implements OnInit {

  constructor(
    private getData: GetDataService
  ) { }


  allPeople;

  ngOnInit() {
    this.displayPerson();
  }

  checkBadge(){

  }

  displayPerson(){
    this.allPeople = this.getData.getPeople()
    console.log(this.allPeople)
  }

}

import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../services/get-data.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  components;
  topics;
  result = [];
  object =[];
  id =0;
  percentageDoneTopic = 32;

  constructor(private getData: GetDataService) { }
  ngOnInit() {
    this.Comp();
  }
  
  
  Comp() {
    this.components = this.getData.getComp();
    for(let i =0; i<this.components.length; i++){
      this.Top(i);
      this.components[i].topic = this.object;
    }
    return this.components;
  }

  Top(i){
    this.topics = this.getData.getTopic();
    this.object = [];
    for(let a = 0; a < this.components[i].topic.length; a++){
      this.object.push(this.topics[this.id]);
      this.id = this.id+1;
    }
  }



}

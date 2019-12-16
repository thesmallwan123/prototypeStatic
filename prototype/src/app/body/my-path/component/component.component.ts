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

  constructor(private getData: GetDataService) { }
  ngOnInit() {
    this.Comp();
  }
  
  
  Comp() {
    this.components = this.getData.getComp();
    for(let i =0; i<this.components.length; i++){
      console.log(this.components[i].id + " ---------- COMPONENT")
      this.Top(i);
      this.components[i].topic = this.object;
    }
    console.log(this.components)
    return this.components;
  }

  Top(i){
    this.topics = this.getData.getTopic();
    this.object = [];
    for(let a = 0; a < this.components[i].topic.length; a++){
      // console.log(this.components[i].topic)
      // console.log(this.topics[this.sid]);
      this.object.push(this.topics[this.id]);
      this.id = this.id+1;
      console.log(this.id)
    }
  }



}

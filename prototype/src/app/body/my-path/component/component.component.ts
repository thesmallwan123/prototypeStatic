import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../services/get-data.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  components;
  topics;

  constructor(private getData: GetDataService) { }
  ngOnInit() {
    this.Comp();
    this.Top();
  }


  Comp() {
    this.components = this.getData.getComp();
    this.components = Object.keys(this.components) .map(i => this.components[i]);
    this.components = Object.values(this.components[0].components);
    console.log(this.components);
    return this.components;
  }
  
  Top(){
    this.topics = this.getData.getTopic();
    this.topics = Object.keys(this.topics) .map(i => this.topics[i]);
    console.log(this.topics[0]);
    this.topics = Object.values(this.topics[0].topics);
    return this.topics;
  }



}

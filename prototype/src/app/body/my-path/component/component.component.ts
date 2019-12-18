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
  length;
  result = [];
  object = [];
  id = 0;
  classID: any;
  width;
  percentageDoneTopic;

  constructor(private getData: GetDataService) {}
  ngOnInit() {
    this.Comp();
  }
  showLessons(id) {
    const element = document.getElementById("viewLesson" + id);
    const element2 = document.getElementById("LESSONS" + id);
    element.classList.add('viewLesson');
    this.width = element2.offsetWidth;
    this.width = this.width - 32;
    setTimeout(function () {
      hideLesson(id);
    }, 5000);

    function hideLesson(id) {
      const element = document.getElementById("viewLesson" + id);
      return element.classList.remove('viewLesson');
    }
  }





  Comp() {
    this.components = this.getData.getComp();
    for (let i = 0; i < this.components.length; i++) {
      this.Top(i);
      this.components[i].topic = this.object;
      for (let b = 0; b < 1; b++) {
        this.components[i].done = this.getData.calcPercentage(this.components[i].topic);
      }
    }
    return this.components;
  }

  Top(i) {
    this.topics = this.getData.getTopic();
    this.object = [];
    for (let a = 0; a < this.components[i].topic.length; a++) {
      this.object.push(this.topics[this.id]);
      this.id = this.id + 1;
    }
  }



}

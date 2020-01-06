import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../services/get-data.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  components;
  topics =[];
  allLessons;
  length;
  result = [];
  allTopics;
  lessons = [];
  idTopic = 0;
  idLesson = 0;
  classID: any;
  width;
  percentageDoneTopic;
  
  
  constructor(private getData: GetDataService) {}
  ngOnInit() {
    this.Comp();
  }
  showLessons(id) {
    this.width = 0;
    const element2 = document.getElementById("viewLesson" + id);
    element2.classList.add('viewLesson');
    this.width = element2.scrollWidth;
    this.width = this.width - 32;
    
    console.log(this.width)
    setTimeout(function () {
      hideLesson(id);
    }, 10000);
    
    function hideLesson(id) {
      const element = document.getElementById("viewLesson" + id);
      return element.classList.remove('viewLesson');
    }
  }
  
  
  
  
  
  Comp() {
    this.components = this.getData.getComp();
    for (let i = 0; i < this.components.length; i++) {
      this.Top(i);
      this.components[i].topic = this.topics;
      this.components[i].done = this.getData.calcPercentage(this.components[i].topic);
    }
    return this.components;
  }
  
  Top(i) {
    // console.log("Loopt door Component")
    this.allTopics = this.getData.getTopic();
    this.topics = [];
    for (let a = 0; a < this.components[i].topic.length; a++) {
      this.Lesson(a,i);
      this.allTopics[this.idTopic].lessons = this.lessons;
      // console.log(this.allTopics[this.idTopic].lessons)
      this.topics.push(this.allTopics[this.idTopic]);
      this.idTopic = this.idTopic + 1;
    }
  }
  Lesson(a,i){
    // console.log("Loopt door Topic")
    this.allLessons = this.getData.getLessons();
    this.lessons = [];
    for(let c=0; c < this.allTopics[this.idTopic].lessons.length; c++){
      this.idLesson = this.allTopics[this.idTopic].lessons[c];
      this.lessons.push(this.allLessons[this.idLesson]);
    }
  }
}

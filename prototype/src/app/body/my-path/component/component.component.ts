import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../services/get-data.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {
  
  topics =[];
  lessons = [];
  components:any = this.getData.getComp();
  allTopics = this.getData.getTopic();
  allLessons = this.getData.getLessons();
  idTopic = 0;
  idLesson:any = 0;
  width;

  
  constructor(private getData: GetDataService) {}
  ngOnInit() {
    this.Comp();
  }

//fixes orangeBar-width in the Overview
  showLessons(id) {
    this.width = 0;
    const element2 = document.getElementById("viewLesson" + id);
    element2.classList.add('viewLesson');
    this.width = element2.scrollWidth;
    this.width = this.width - 32;
    setTimeout(function () {
      hideLesson(id);
    }, 10000);
    
    function hideLesson(id) {
      const element = document.getElementById("viewLesson" + id);
      return element.classList.remove('viewLesson');
    }
  }
  
  
  
  
//gets all the Components
  Comp() {
    for (let i = 0; i < this.components.length; i++) {
      this.Top(i);
      this.components[i].topic = this.topics;
      this.components[i].done = this.getData.calcPercentage(this.components[i].topic);
    }
    return this.components;
  }
  
//gets all the Topics
  Top(i) {
    this.topics = [];
    for (let a = 0; a < this.components[i].topic.length; a++) {
      this.Lesson(a,i);
      this.topics.push(this.allTopics[this.idTopic]);
      this.topics[a].lessons = this.lessons;
      this.idTopic = this.idTopic + 1;
    }
  }

//gets all the lessons
  Lesson(a,i){
    this.lessons = [];
    for(let c=0; c < this.allTopics[this.idTopic].lessons.length; c++){
      this.idLesson = this.allTopics[this.idTopic].lessons[c];
      if(typeof(this.idLesson) !== "number"){
        //This calls the correct key of the object
        this.idLesson = this.idLesson.id;
        this.lessons.push(this.allLessons[this.idLesson]);
      }
      else{
        this.lessons.push(this.allLessons[this.idLesson]);
      }
      
    }
  }
}

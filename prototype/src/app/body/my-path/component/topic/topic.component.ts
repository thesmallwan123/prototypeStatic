import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../../services/get-data.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  constructor(private GetData: GetDataService) { }
  width;
  progress = 12;
  topics;
  components;
  result;

  ngOnInit() {
    this.getWidth();
    this.getTopic();
  }
  getTopic(){
    // if you want to be more clever...
    this.topics = this.GetData.getTopic();
    this.components = this.GetData.getComp();
    this.result = this.topics.filter(o1 => this.components.some(o2 => o1.componentID === o2.id));
  }
  getWidth() {
    this.showLessons();
    this.width = document.getElementById('divWidth').offsetWidth;
    this.hideLesson();
  }

  showLessons() {
    const element = document.getElementById('viewLessonID');
    element.classList.add('viewLesson');
  }

  hideLesson() {
    const element = document.getElementById('viewLessonID');
    element.classList.remove('viewLesson');
  }
}

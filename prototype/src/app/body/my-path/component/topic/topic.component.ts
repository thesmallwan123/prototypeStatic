import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

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


  ngOnInit() {
    this.getWidth();
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

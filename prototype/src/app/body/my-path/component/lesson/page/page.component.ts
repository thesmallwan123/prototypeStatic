import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../../../services/get-data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  constructor(
    private Getdata: GetDataService,
    private route: ActivatedRoute
  ) { }
  title = "Lesson Completed!";
  txt = [
    "You are only ", 
    " more lesson(s) and a quiz away from your ",
    " badge"
  ];
  allTopic = this.Getdata.getTopic();
  idLesson = parseInt(this.route.snapshot.paramMap.get('idLesson'));
  topicId = parseInt(this.route.snapshot.paramMap.get('idTop')) -1;
  lessonsLeft;
  currentTopic = this.allTopic[this.topicId];
  finalText:any = "";
  
  
  ngOnInit() {
    this.calcLessonsLeft();
    this.initText();
  }

  // This calculates the amount of the lessons left
  calcLessonsLeft(){
    var maxLesson = this.currentTopic.lessons[this.currentTopic.lessons.length -1]
    return this.lessonsLeft = maxLesson - this.idLesson;
  }

  //inSitialises the text to the finalText
  initText(){
    for(let i =0; i<this.txt.length;i++){
      this.finalText = this.finalText + this.txt[i];
      if(i == 0){
        this.finalText = this.finalText + this.lessonsLeft;
      }
    }
  }
}

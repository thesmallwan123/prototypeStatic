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
  lessonsLeft;
  topicId;
  currentTopic;
  finalText:any = "";
  allTopic = this.Getdata.getTopic();

  
  ngOnInit() {
    this.topicId = parseInt(this.route.snapshot.paramMap.get('idTop'));
    this.topicId = this.topicId -1;
    this.currentTopic = this.allTopic[this.topicId];
    this.calcLessonsLeft();
    this.initText();
  }

  calcLessonsLeft(){
    this.lessonsLeft = this.Getdata.howManyLessonsLeft(this.currentTopic);
  }

  initText(){
    for(let i =0; i<this.txt.length;i++){
      this.finalText = this.finalText + this.txt[i];
      if(i == 0){
        this.finalText = this.finalText + this.lessonsLeft;
      }
    }
  }
}

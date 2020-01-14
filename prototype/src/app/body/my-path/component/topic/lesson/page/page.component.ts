import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../../../../services/get-data.service';
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
  components;
  topics;



  finalText:any = "";

  ngOnInit() {
    this.calcLessonsLeft();
    this.initText();
  }

  calcLessonsLeft(){
    this.components = this.Getdata.getComp();
    this.components = this.components[3];
    this.topics = this.components.topic.length;
    return this.lessonsLeft = this.topics;
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

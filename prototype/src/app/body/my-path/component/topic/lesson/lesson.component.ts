import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GetDataService } from '../../../../../services/get-data.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  constructor(
    private getData: GetDataService,
    private route: ActivatedRoute
    ) { }
  allLessons2;
  allPages = this.getData.getPages();
  id
  page;
  lesson;
  mustHavePages;
  pageID = 0;
  percDoneLesson = 0;
  allPerc = [];
  endPage = true;
  allTopic;
  topicRow;
  ngOnInit() { 
    this.getlesson();
  }
//calculates the % of te lesson
  calcPerc(){
    this.percDoneLesson = this.getData.calcPercentage(this.allPerc)
  }

  // reinitialises all the lessons
  getlesson(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.id = parseInt(this.id, 10);
    
    this.allLessons2 = this.getData.getLessons()
    this.lesson = this.allLessons2[this.id]
    this.getPages();
  }

//Reinitialises the pages, and calculates the new % done of the lesson
  getPages(){
    this.allPerc = [];
    this.mustHavePages = this.allLessons2[this.id].pageID
    for(let i =0; i<this.mustHavePages.length;i++){
      this.page = this.allPages[this.mustHavePages[this.pageID]]
      this.allPerc.push(this.allPages[this.mustHavePages[i]])
      this.calcPerc();
    }
    if(this.page.id == 29){
      this.percDoneLesson = 100;
      this.endPage = true
    }
  }
  
  // Go to next page
  nextPage(){
    this.getData.setPages(this.allPages[this.mustHavePages[this.pageID]]);
    this.calcPerc();
    
    this.pageID = this.pageID + 1;
    const lastItem = this.mustHavePages.length -1;
    if(this.pageID > lastItem){
      return this.goQuiz();
    }
    this.getPages();
  }
  
  //Go to Previous page
  previousPage(){
    this.pageID = this.pageID - 1;
    this.getPages();
  }
  
// Redirect to new lesson
  goQuiz(){
    this.endPage=false;
    this.findTopic();
  }
  
  findTopic(){
    this.allTopic = this.getData.getTopic();
    for(let i =0;i<this.allTopic.length;i++){
      this.topicRow = this.myFunction(i);
      console.log(this.topicRow)
      if(this.topicRow == 0){
        window.location.href = "http://localhost:4200/quiz/"+this.topicRow;
      }
    }
  }
  myFunction(i) {
    const id = this.lesson.id;
    const topID = this.allTopic[i].lessons.findIndex(checkRow);    
    function checkRow(row) {
      return row === id;
    }


    return topID;
  }
  
}
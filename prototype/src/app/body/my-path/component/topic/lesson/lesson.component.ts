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
  pageID =0;
  percDoneLesson =0;
  allPerc = [];
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
    }
    console.log(this.allPerc)
    this.calcPerc();
  }

// Go to next page
  nextPage(){
    this.allPages[this.mustHavePages[this.pageID]].done = 100;
    console.log(this.allPages[this.mustHavePages[this.pageID]].done)
    this.pageID = this.pageID + 1;
    const lastItem = this.mustHavePages.length -1;
    if(this.pageID > lastItem){
      this.showLessonCompletion();
    }
    this.getPages();
  }

//Go to Previous page
  previousPage(){
    this.pageID = this.pageID - 1;
    this.getPages();
  }

//shows the page that you will be directed to next lesson
  showLessonCompletion(){
    console.log("This lesson is completed, create popup in here")
    console.log("OnSubmit, go to nextLesson")
    this.nextLesson();
  }

// Redirect to new lesson
  nextLesson(){
      this.id = this.id +1;
      window.location.href = "http://localhost:4200/lesson/"+this.id;
  }

}
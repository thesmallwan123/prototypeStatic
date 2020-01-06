import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  allLessons;
  allPages;
  id
  page;
  lesson;
  mustHavePages;
  pageID =0;
  ngOnInit() {
    this.getlesson();
  }
  getlesson(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.id = parseInt(this.id, 10);
    
    this.allLessons = this.getData.getLessons()
    this.lesson = this.allLessons[this.id]
    this.getPages();
  }
  
  getPages(){
    this.allPages = this.getData.getPages()
    this.mustHavePages = this.allLessons[this.id].pageID
    for(let i =0; i<this.mustHavePages.length;i++){
      this.page = this.allPages[this.pageID]
    }
    
  }

  nextPage(){
    console.log(this.pageID)
    this.pageID = this.pageID +1;
    this.getPages();
  }
}
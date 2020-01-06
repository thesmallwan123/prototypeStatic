import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  txt1 = "So, you might be here because you are wondering what is meant by this buzzword DevOps. To give you a definition, DevOps is “… a culture shift designed to improve quality of solutions that are business-oriented and rapidly evolving and can be easily molded to today’s needs"
  txt2 = "DevOps is “… a culture shift designed to improve quality of solutions that are business-oriented and rapidly evolving and can be easily molded to today’s needs"
  giffy = "../../../../../../assets/gifs/component3/lesson60/1.1.gif"
  constructor() { }

  ngOnInit() {
    
  }

}

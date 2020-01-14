import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../../services/get-data.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  constructor(private GetData: GetDataService) { }

  ngOnInit() {
  }
}

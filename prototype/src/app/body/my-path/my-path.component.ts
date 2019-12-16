import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-my-path',
  templateUrl: './my-path.component.html',
  styleUrls: ['./my-path.component.scss']
})
export class MyPathComponent implements OnInit {
  component;
  constructor(private getData: GetDataService) { }
  ngOnInit() {
    this.component = this.getData.getComp();
  }

}

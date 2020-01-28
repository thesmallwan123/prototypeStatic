import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-my-network',
  templateUrl: './my-network.component.html',
  styleUrls: ['./my-network.component.scss']
})
export class MyNetworkComponent implements OnInit {

  constructor(
    private getData: GetDataService
  ) { }


  allPeople = this.getData.getPeople();

  ngOnInit() {
  }

  // shows onclick the div underneath the icon
  showDiv(type){
    switch(type){
      case "calendar":
        document.getElementById("hideTxtCalendar").setAttribute("id", "txtCalendar")
        if(document.getElementById("txtMail") !== null){
          document.getElementById("txtMail").setAttribute("id", "hideTxtMail")
        }
        if(document.getElementById("txtPhone") !== null){
          document.getElementById("txtPhone").setAttribute("id", "hideTxtPhone")
        }
        break;

      case "mail":
        document.getElementById("hideTxtMail").setAttribute("id", "txtMail")
        if(document.getElementById("txtCalendar") !== null){
          document.getElementById("txtCalendar").setAttribute("id", "hideTxtCalendar")
        }
        if(document.getElementById("txtPhone") !== null){
          document.getElementById("txtPhone").setAttribute("id", "hideTxtPhone")
        }        console.log(type);
        break;

      case "phone":
        document.getElementById("hideTxtPhone").setAttribute("id", "txtPhone")
        if(document.getElementById("txtMail") !== null){
          document.getElementById("txtMail").setAttribute("id", "hideTxtMail")
        }
        if(document.getElementById("txtCalendar") !== null){
          document.getElementById("txtCalendar").setAttribute("id", "hideTxtCalendar")
        }
        console.log(type);
        break;
          
    }
  }

}

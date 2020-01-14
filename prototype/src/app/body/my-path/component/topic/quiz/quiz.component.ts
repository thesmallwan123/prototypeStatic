import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../../../services/get-data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(
    private Getdata: GetDataService,
    private route: ActivatedRoute
  ) { }
  
  
  topicId: number = parseInt(this.route.snapshot.paramMap.get('id'));
  allQuizes = this.Getdata.getQuiz();
  currentQuizID = this.topicId -1;
  currentQuiz = this.allQuizes[this.currentQuizID];
  multipleChoise;
  Open;
  DragAndDrop;
  currentQuestionID =0;
  question = this.currentQuiz.questions[this.currentQuestionID].question;
  poss = this.currentQuiz.questions[this.currentQuestionID].possibilatys;
  allTopics = this.Getdata.getTopic();
  currentTopic;
  i;
  
  userAwnser=[];

  ngOnInit() {
  }

  setAwnser(event, id){
    if(event.target.checked == true){
      this.userAwnser.sort()
      this.userAwnser.push(id)
    }
    else{
      this.userAwnser.sort()
      var i = this.userAwnser.indexOf(id) 
      this.userAwnser.splice(i, 1)
    }
  }


  nextQuetsion(){
    if(this.checkAwnser() == true){
      document.getElementById("bottom").style.background='#33cc9930';
      document.getElementById("hideButt").setAttribute("id", "showButt")
      document.getElementById("showButt").setAttribute("id", "hideButt")
      document.getElementById("hideCorrText").setAttribute("id", "showCorrText")


      //Still need to change the dots to green as well

      this.currentQuiz.questions[this.currentQuestionID].done = 100;
    }
    else{
      document.getElementById("bottom").style.background='rgba(255, 0, 0, 0.1)'; 
    }
  }
  
  checkAwnser(){
    this.userAwnser.sort()
    // Check if the arrays are the same length
    if (this.userAwnser.length !== this.currentQuiz.questions[this.currentQuestionID].awnser.length){
      console.log("Wrong length"); 
      return false
    }
    else{
      // Check if all items exist and are in the same order
      for (var i = 0; i < this.userAwnser.length; i++) {
        if (this.userAwnser[i] !== this.currentQuiz.questions[this.currentQuestionID].awnser[i]){
          console.log("Wrong order"); 
          return false;
        }
      }
    }
    // Otherwise, return true
    return true;
  }
  endQuiz(){
    this.currentQuizID = this.currentQuizID +1;
    this.topicId = this.topicId +1;

    var lessonID = this.allTopics[this.topicId].lessons[0];
    return window.location.href = "http://localhost:4200/"+this.topicId+"/lesson/"+lessonID;
  }


  checkQuestionType(){
    switch (this.currentQuiz.questions[0].type){
      case 0:
        return this.multipleChoise = 1;
      break;
      case 1:
        return this.Open = 1;
      break;
      case 2:
        return this.DragAndDrop = 1;
      break;
    }
  }
}

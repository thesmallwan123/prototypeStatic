import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../../services/get-data.service';
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
  ) {
    this.isLoading = true;
  }
  
  
  topicId: number = parseInt(this.route.snapshot.paramMap.get('idQuiz'));
  questionID: number = parseInt(this.route.snapshot.paramMap.get('idQuestion'));
  isLoading: boolean;
  allQuizes = this.Getdata.getQuiz();
  allTopics = this.Getdata.getTopic();
  currentQuizID = this.topicId -1;
  currentQuiz = this.allQuizes[this.currentQuizID];
  question = this.currentQuiz.questions[this.questionID].question;
  questionType = this.checkQuestionType();
  poss = this.currentQuiz.questions[this.questionID].possibilatys;
  currentTopic = this.allTopics[this.currentQuizID];
  awnsered = 0;
  userAwnser=[];
  Perc: number = 0;
  lesson;

  ngOnInit() {
    this.calcPerc();
  }
  ngAfterviewInit(){
    this.isLoading = false;
  }

  //this sets the awnsers when an awnser is clicked.
  setAwnser(event, id){
    this.userAwnser.sort()
    if(event.target.checked == true || event.srcElement.style.backgroundColor !== "rgb(51, 204, 153)"){
      event.srcElement.style.backgroundColor = "rgb(51, 204, 153)";
      this.userAwnser.push(id)
    }
    else{
      event.srcElement.style.backgroundColor = "";
      var i = this.userAwnser.indexOf(id) 
      this.userAwnser.splice(i, 1)
    }
    this.userAwnser.sort()
  }

  // shows buttons in the bottom of the mat-card
  showButton(){
    // if awnser is true, make some ID's green, show the button to next topic
    if(this.checkAwnser() == true){
      document.getElementById("bottom").style.background='#33cc9930';
      document.getElementById("showButt").setAttribute("id", "hideButt")
      document.getElementById("hideButtGood").setAttribute("id", "showButtGood")
      document.getElementById("hideCorrText").setAttribute("id", "showCorrText")
      //Still need to change the dots to green as well
      this.currentQuiz.questions[this.questionID].done = 100;
      
    }

    // if awnser is false, make some ID's red, show the button to first lesson
    // user cant submit new awnser
    else{
      this.endQuiz();
      document.getElementById("1").style.color = "rgba(255, 0, 0))"
      document.getElementById("showButt").setAttribute("id", "hideButt")
      document.getElementById("hideButtWrong").setAttribute("id", "showButtWrong")
      document.getElementById("hideWrongText").setAttribute("id", "showWrongText")
      document.getElementById("bottom").style.background='rgba(255, 0, 0, 0.1)'; 
    }
  }
  
  //checks how many times the submitButton is clicked 
  //first to submit awnser, awnser is shown after click
  //second to check if the user clicked all the awnsers
  checkOpenQuestionFirst(){
    if(this.questionType == 1){
      this.awnsered = this.awnsered + 1;
      if(this.awnsered == 2){
        this.showButton();
      }
    }
  }

  //checks if the iven awnsers are correct
  checkAwnser(){
    this.userAwnser.sort()
      // Check if the arrays are the same length
      if (this.userAwnser.length !== this.currentQuiz.questions[this.questionID].correctAwnser.length){
        return false
      }
      else{
        // Check if all items exist and are in the same order
        for (var i = 0; i < this.userAwnser.length; i++) {
          if (this.userAwnser[i] !== this.currentQuiz.questions[this.questionID].correctAwnser[i]){
            return false;
          }
        }
      }
    // Otherwise, return true
    return true;
  }

  //redirects to next question or topic
  endQuiz(){
    if(this.checkAwnser() == true){
      this.questionID = this.questionID +1;
      if(this.questionID < this.currentQuiz.questions.length){
        this.currentQuizID = this.currentQuizID + 1;/*Because we do -1 in the init to get the correct quiz*/
        window.location.href = "http://localhost:4200/quiz/"+this.currentQuizID+"/"+this.questionID;
      }
      else{
        this.topicId = this.topicId +1;
        var lessonID = this.allTopics[this.topicId].lessons[0];
        return window.location.href = "http://localhost:4200/"+this.topicId+"/lesson/"+lessonID;
      }
    }
    
    //redirects to first lesson of this topic
    else{
      this.topicId = this.topicId -1;
      this.lesson = this.allTopics[this.topicId].lessons[0];
      this.topicId = this.topicId +1;
    }
  }
  

  //goes to first lesson of the topic
  goLesson(){
    return window.location.href = "http://localhost:4200/"+this.topicId+"/lesson/"+this.lesson;
  }


  //checks the questiontype
  checkQuestionType(){
    switch (this.currentQuiz.questions[this.questionID].type){
      case 0:
        //multiple choise
        return this.questionType = 0;
      break;
      case 1:
        //Open question
        return this.questionType = 1;
      break;
      case 2:
        // Drag and Drop (not implemented)
        return this.questionType = 2;
      break;
    }
  }

  //calculates the percentage of the quiz
  calcPerc(){
    return this.Perc = this.Getdata.calcPercentage(this.currentQuiz.questions);
  }
}

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  components: Object = [
    {id: 1, done:0, topic:[1,2,3], title: "Digital Way of working", description: "Here you find all the topics."},
    {id: 2, done:0, topic:[4,5], title: "Digital Products", description: "Here you find all the topics."},
    {id: 3, done:0, topic:[6,7], title: "IT Organisation", description: "Here you find all the topics."},
    {id: 4, done:0, topic:[8,9,10,11], title: "IT Ways of Working", description: "Here you find all the topics."},
    {id: 5, done:0, topic:[12], title: "Application Architecture", description: "Here you find all the topics."},
    {id: 6, done:0, topic:[13,14,15,16], title: "Security", description: "Here you find all the topics."},
    {id: 7, done:0, topic:[17,18,19], title: "IT Service Management", description: "Here you find all the topics."}
    ]
  
  quizes: Object = [
    {id: 1, done: 0, questions:[
      {id: 1, type:0, done: 0, question: "Which of the following are Front-ends?", possibilatys:[{id:0, text:"Awnser 1"},{id:1, text:"Awnser 2"},{id:2, text:"Awnser 3"},{id:3, text:"Awnser 4"}], correctAwnser: [0,3]},
      {id: 2, type:1, done: 0, question: "Discribe the difference between front-end and back-end", correctAwnser:[1,3,5,7], awnser: [{id: 0, button: false, txt:"The term “front-end” refers to the "},{id: 1, button: true, txt:"user interface"},{id: 2, button: false, txt:", while “back-end” means the "},{id: 3, button: true, txt:"server"},{id: 4, button: false, txt:", "},{id: 5, button: true, txt:"application"},{id: 6, button: false, txt:", "},{id: 7, button: true, txt:"database"},{id: 8, button: false, txt:"and that work behind the scenes to deliver information to the user."}]},
      {id: 3, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      {id: 4, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      ]},
    {id: 2, done: 0, questions:[
      {id: 1, type:0, done: 0, question: "Which of the following are Front-ends?", possibilatys:[{id:0, text:"Awnser 1"},{id:1, text:"Awnser 2"},{id:2, text:"Awnser 3"},{id:3, text:"Awnser 4"}], correctAwnser: [0,3]},
      {id: 2, type:1, done: 0, question: "Discribe the difference between front-end and back-end", correctAwnser:[1,3,5,7], awnser: [{id: 0, button: false, txt:"The term “front-end” refers to the "},{id: 1, button: true, txt:"user interface"},{id: 2, button: false, txt:", while “back-end” means the "},{id: 3, button: true, txt:"server"},{id: 4, button: false, txt:", "},{id: 5, button: true, txt:"application"},{id: 6, button: false, txt:", "},{id: 7, button: true, txt:"database"},{id: 8, button: false, txt:"and that work behind the scenes to deliver information to the user."}]},
      {id: 3, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      {id: 4, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      ]},
      
    {id: 3, done: 0, questions:[
      {id: 1, type:0, done: 0, question: "Which of the following are Front-ends?", possibilatys:[{id:0, text:"Awnser 1"},{id:1, text:"Awnser 2"},{id:2, text:"Awnser 3"},{id:3, text:"Awnser 4"}], correctAwnser: [0,3]},
      {id: 2, type:1, done: 0, question: "Discribe the difference between front-end and back-end", correctAwnser:[1,3,5,7], awnser: [{id: 0, button: false, txt:"The term “front-end” refers to the "},{id: 1, button: true, txt:"user interface"},{id: 2, button: false, txt:", while “back-end” means the "},{id: 3, button: true, txt:"server"},{id: 4, button: false, txt:", "},{id: 5, button: true, txt:"application"},{id: 6, button: false, txt:", "},{id: 7, button: true, txt:"database"},{id: 8, button: false, txt:"and that work behind the scenes to deliver information to the user."}]},
      {id: 3, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      {id: 4, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      ]},
      
    {id: 4, done: 0, questions:[
      {id: 1, type:0, done: 0, question: "Which of the following are Front-ends?", possibilatys:[{id:0, text:"Awnser 1"},{id:1, text:"Awnser 2"},{id:2, text:"Awnser 3"},{id:3, text:"Awnser 4"}], correctAwnser: [0,3]},
      {id: 2, type:1, done: 0, question: "Discribe the difference between front-end and back-end", correctAwnser:[1,3,5,7], awnser: [{id: 0, button: false, txt:"The term “front-end” refers to the "},{id: 1, button: true, txt:"user interface"},{id: 2, button: false, txt:", while “back-end” means the "},{id: 3, button: true, txt:"server"},{id: 4, button: false, txt:", "},{id: 5, button: true, txt:"application"},{id: 6, button: false, txt:", "},{id: 7, button: true, txt:"database"},{id: 8, button: false, txt:"and that work behind the scenes to deliver information to the user."}]},
      {id: 3, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      {id: 4, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      ]},
      
    {id: 5, done: 0, questions:[
      {id: 1, type:0, done: 0, question: "Which of the following are Front-ends?", possibilatys:[{id:0, text:"Awnser 1"},{id:1, text:"Awnser 2"},{id:2, text:"Awnser 3"},{id:3, text:"Awnser 4"}], correctAwnser: [0,3]},
      {id: 2, type:1, done: 0, question: "Discribe the difference between front-end and back-end", correctAwnser:[1,3,5,7], awnser: [{id: 0, button: false, txt:"The term “front-end” refers to the "},{id: 1, button: true, txt:"user interface"},{id: 2, button: false, txt:", while “back-end” means the "},{id: 3, button: true, txt:"server"},{id: 4, button: false, txt:", "},{id: 5, button: true, txt:"application"},{id: 6, button: false, txt:", "},{id: 7, button: true, txt:"database"},{id: 8, button: false, txt:"and that work behind the scenes to deliver information to the user."}]},
      {id: 3, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      {id: 4, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      ]},
      
    {id: 6, done: 0, questions:[
      {id: 1, type:0, done: 0, question: "Which of the following are Front-ends?", possibilatys:[{id:0, text:"Awnser 1"},{id:1, text:"Awnser 2"},{id:2, text:"Awnser 3"},{id:3, text:"Awnser 4"}], correctAwnser: [0,3]},
      {id: 2, type:1, done: 0, question: "Discribe the difference between front-end and back-end", correctAwnser:[1,3,5,7], awnser: [{id: 0, button: false, txt:"The term “front-end” refers to the "},{id: 1, button: true, txt:"user interface"},{id: 2, button: false, txt:", while “back-end” means the "},{id: 3, button: true, txt:"server"},{id: 4, button: false, txt:", "},{id: 5, button: true, txt:"application"},{id: 6, button: false, txt:", "},{id: 7, button: true, txt:"database"},{id: 8, button: false, txt:"and that work behind the scenes to deliver information to the user."}]},
      {id: 3, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      {id: 4, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      ]},
      
    {id: 7, done: 0, questions:[
      {id: 1, type:0, done: 0, question: "Which of the following are Front-ends?", possibilatys:[{id:0, text:"Awnser 1"},{id:1, text:"Awnser 2"},{id:2, text:"Awnser 3"},{id:3, text:"Awnser 4"}], correctAwnser: [0,3]},
      {id: 2, type:1, done: 0, question: "Discribe the difference between front-end and back-end", correctAwnser:[1,3,5,7], awnser: [{id: 0, button: false, txt:"The term “front-end” refers to the "},{id: 1, button: true, txt:"user interface"},{id: 2, button: false, txt:", while “back-end” means the "},{id: 3, button: true, txt:"server"},{id: 4, button: false, txt:", "},{id: 5, button: true, txt:"application"},{id: 6, button: false, txt:", "},{id: 7, button: true, txt:"database"},{id: 8, button: false, txt:"and that work behind the scenes to deliver information to the user."}]},
      {id: 3, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      {id: 4, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      ]},
      
    {id: 8, done: 0, questions:[
      {id: 1, type:0, done: 0, question: "Which of the following are Front-ends?", possibilatys:[{id:0, text:"Awnser 1"},{id:1, text:"Awnser 2"},{id:2, text:"Awnser 3"},{id:3, text:"Awnser 4"}], correctAwnser: [0,3]},
      {id: 2, type:1, done: 0, question: "Discribe the difference between front-end and back-end", correctAwnser:[1,3,5,7], awnser: [{id: 0, button: false, txt:"The term “front-end” refers to the "},{id: 1, button: true, txt:"user interface"},{id: 2, button: false, txt:", while “back-end” means the "},{id: 3, button: true, txt:"server"},{id: 4, button: false, txt:", "},{id: 5, button: true, txt:"application"},{id: 6, button: false, txt:", "},{id: 7, button: true, txt:"database"},{id: 8, button: false, txt:"and that work behind the scenes to deliver information to the user."}]},
      {id: 3, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      {id: 4, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      ]},
      
    {id: 9, done: 0, questions:[
      {id: 1, type:0, done: 0, question: "Which of the following are Front-ends?", possibilatys:[{id:0, text:"A cashier at the super market"},{id:1, text:"The inside of a computer"},{id:2, text:"The database that stores passenger information"},{id:3, text:"Your PC welcome screen that you have to unlock"}], correctAwnser: [0,3]},
      {id: 2, type:1, done: 0, question: "Discribe the difference between front-end and back-end", correctAwnser:[1,3,5,7], awnser: [{id: 0, button: false, txt:"The term “front-end” refers to the "},{id: 1, button: true, txt:"user interface"},{id: 2, button: false, txt:", while “back-end” means the "},{id: 3, button: true, txt:"server"},{id: 4, button: false, txt:", "},{id: 5, button: true, txt:"application"},{id: 6, button: false, txt:", "},{id: 7, button: true, txt:"database"},{id: 8, button: false, txt:"and that work behind the scenes to deliver information to the user."}]},
      ]},
      
    {id: 10, done: 0, questions:[
      {id: 1, type:0, done: 0, question: "Which of the following are Front-ends?", possibilatys:[{id:0, text:"Awnser 1"},{id:1, text:"Awnser 2"},{id:2, text:"Awnser 3"},{id:3, text:"Awnser 4"}], correctAwnser: [0,3]},
      {id: 2, type:1, done: 0, question: "Discribe the difference between front-end and back-end", correctAwnser:[1,3,5,7], awnser: [{id: 0, button: false, txt:"The term “front-end” refers to the "},{id: 1, button: true, txt:"user interface"},{id: 2, button: false, txt:", while “back-end” means the "},{id: 3, button: true, txt:"server"},{id: 4, button: false, txt:", "},{id: 5, button: true, txt:"application"},{id: 6, button: false, txt:", "},{id: 7, button: true, txt:"database"},{id: 8, button: false, txt:"and that work behind the scenes to deliver information to the user."}]},
      {id: 3, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      {id: 4, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      ]},
      
    {id: 11, done: 0, questions:[
      {id: 1, type:0, done: 0, question: "Which of the following are Front-ends?", possibilatys:[{id:0, text:"Awnser 1"},{id:1, text:"Awnser 2"},{id:2, text:"Awnser 3"},{id:3, text:"Awnser 4"}], correctAwnser: [0,3]},
      {id: 2, type:1, done: 0, question: "Discribe the difference between front-end and back-end", correctAwnser:[1,3,5,7], awnser: [{id: 0, button: false, txt:"The term “front-end” refers to the "},{id: 1, button: true, txt:"user interface"},{id: 2, button: false, txt:", while “back-end” means the "},{id: 3, button: true, txt:"server"},{id: 4, button: false, txt:", "},{id: 5, button: true, txt:"application"},{id: 6, button: false, txt:", "},{id: 7, button: true, txt:"database"},{id: 8, button: false, txt:"and that work behind the scenes to deliver information to the user."}]},
      {id: 3, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      {id: 4, type:1, done: 0, question: "Which of the following are Front-ends?", correctAwnser: [0,3]},
      ]},
    ]
  topics: Object = [
    {id: 1, done: 0, lessons:[1], quizID: 1, badgeID: 1, title: "Scrum", description: "How we work according to the Scrum framework"},
    {id: 2, done: 0, lessons:[1], quizID: 2, badgeID: 2, title: "SAFe", description: "How our Agile practises are scaled in a common framework"},
    {id: 3, done: 0, lessons:[1], quizID: 3, badgeID: 3, title: "Digital Agile Release Planes", description: "An overview of the diffrent Digital Agile Release Planes"},
    {id: 4, done: 0, lessons:[1], quizID: 4, badgeID: 4, title: "Front-end and back-end", description: "The diffrence between front-ends and back-ends"},
    {id: 5, done: 0, lessons:[1], quizID: 5, badgeID: 5, title: "AFKL's digitals produts", description: "And overview of all the digital B2C products of AFKL"},
    {id: 6, done: 0, lessons:[1], quizID: 6, badgeID: 6, title: "IT Departement", description: "Get to know the four IT departements of AFKL"},
    {id: 7, done: 0, lessons:[1], quizID: 7, badgeID: 7, title: "E-Commerce", description: "learn about the E-Commerce departement and its groups"},
    {id: 8, done: 0, lessons:[1], quizID: 8, badgeID: 8, title: "Development Process", description: "The diffrent stages of the software development process"},
    {id: 9, done: 0, lessons:[60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70], quizID: 9, badgeID: 9, title: "DevOps", description: "The integration of development and operations in one process"},
    {id: 10, done: 0, lessons:[1], quizID: 10, badgeID: 10, title: "Self Service", description: "AFKL's Self Servies as a wat to implement DevOps"},
    {id: 11, done: 0, lessons:[1], quizID: 11, badgeID: 11, title: "Delivery Pipeline", description: "How to delivery of software has been automated in one pipeline"},
    {id: 12, done: 0, lessons:[1], quizID: 12, badgeID: 12, title: "Architecture Overview", description: "Overview of the architecture of AFKL's Digital applications"},
    {id: 13, done: 0, lessons:[1], quizID: 13, badgeID: 13, title: "IT Security", description: "get to know the diffrent kinds of IT security"},
    {id: 14, done: 0, lessons:[1], quizID: 14, badgeID: 14, title: "Application Security Planning", description: "Application sucurity scans and AFKL;s Self Service Security Scan"},
    {id: 15, done: 0, lessons:[1], quizID: 15, badgeID: 15, title: "Datacenter vs. Cloud", description: "Security related to hosting at a datacenter versus the cloud"},
    {id: 16, done: 0, lessons:[1], quizID: 16, badgeID: 16, title: "PCI Compliancy", description: "How to deal with passenger information"},
    {id: 17, done: 0, lessons:[1], quizID: 17, badgeID: 17, title: "Process", description: "The diffrent IT Service Management processes"},
    {id: 18, done: 0, lessons:[1], quizID: 18, badgeID: 18, title: "Change Managment at AFKL", description: "How change management is practised at AFKL"},
    {id: 19, done: 0, lessons:[1], quizID: 19, badgeID: 19, title: "Incident Management at AFKL", description: "How incident management is practised at AFKL"},
    ]
  
  lessons: Object = [
    {id: 0, done: 0,title: "This is a basic test", pageID:[28]},
    {id: 1, done: 0,title: "This is a basic test", pageID:[28, 29]},
    {id: 2, done: 0,title: "This is a basic test", pageID:[28, 29]},
    {id: 3, done: 0,title: "This is a basic test", pageID:[28, 29]},
    {id: 4, done: 0,title: "This is a basic test", pageID:[28, 29]},
    {id: 5, done: 0,title: "This is a basic test", pageID:[28, 29]},
    {id: 6, done: 0,title: "This is a basic test", pageID:[28, 29]},
    {id: 7, done: 0,title: "This is a basic test", pageID:[28, 29]},
    {id: 8, done: 0,title: "This is a basic test", pageID:[28, 29]},
    {id: 9, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 10, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 11, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 12, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 13, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 14, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 15, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 16, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 17, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 18, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 19, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 20, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 21, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 22, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 23, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 24, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 25, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 26, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 27, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 28, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 29, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 30, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 31, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 32, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 33, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 34, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 35, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 36, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 37, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 38, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 39, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 40, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 41, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 42, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 43, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 44, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 45, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 46, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 47, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 48, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 49, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 50, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 51, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 52, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 53, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 54, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 55, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 56, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 57, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 58, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 59, done: 0, title: "This is a basic test", pageID:[28, 29]},
    {id: 60, done: 0, title: "Basic Explanation", pageID:[0,1,2,3,4,5,6,7,8,29]},
    {id: 61, done: 0, title: "DevOps Goals", pageID:[9,10,11,12,13,14,29]},
    {id: 62, done: 0, title: "Plan", pageID:[15,16,17,18,29]},
    {id: 63, done: 0, title: "Code", pageID:[19,20,21,22,23,29]},
    {id: 64, done: 0, title: "Build", pageID:[24,25,26,27,29]},
    {id: 65, done: 0, title: "Testing", pageID:[30, 31, 32, 33, 34, 35, 29]},
    {id: 66, done: 0, title: "Release", pageID:[36, 37, 38, 39, 40, 41, 42, 43, 29]},
    {id: 67, done: 0, title: "Deploy", pageID:[44, 45, 46, 29]},
    {id: 68, done: 0, title: "Operate", pageID:[47, 48, 49, 50, 51, 52, 53, 54, 29]},
    {id: 69, done: 0, title: "Monitor", pageID:[55, 56, 57, 58, 29]},
    {id: 70, done: 0, title: "DevOps at AFKL", pageID:[59, 60, 61, 62, 63, 29]},
    ]
  pages: Object = [
    //lesson 60
      {
        id: 0,
        done: 0,
        lessonID: 60,
        text: [
          "So, you might be here because you are wondering what is meant by this buzzword DevOps. To give you a definition, DevOps is “…  a culture shift designed to improve quality of solutions that are business - oriented and rapidly evolving and can be easily molded to today’s needs ” [1]",
          "Okay. So we are talking about a culture shift, the improvement of quality, business - oriented solutions, and addressing rapidly evolving needs. Sounds good. But what does it really mean? And how do we bring this into practice?"
        ],
        asset: "../../assets/gifs/component3/lesson60/1.1.gif"
      },
      {
        id: 1,
        done: 0,
        lessonID: 60,
        text: [
          "Let’s first take a look back into history. Back in the days, before DevOps, software development at AFKL and many other companies happened according to the waterfall methodology. The waterfall methodology consists of the different software development phases, which happen in linear sequence. This means that the next phase only starts once the phase before it has been finished.",
          "The different phases of the waterfall methodology are the requirements phase, design phase, implementation phase, verification phase, and the maintenance phase. Go to Topic 8: Software Development Process to get more information about the different phases."
        ],
        asset: "../../assets/gifs/component3/lesson60/1.2.gif"
      },
      {
        id: 2,
        done: 0,
        lessonID: 60,
        text: [
          "During the time of the waterfall methodology, development and operations were two different silos which were quite separated from each other. Development would worry about the creation of the software, throw it “over the wall” to operations, who had to maintain the software as long as it was alive (this almost sounds like giving away your child for adoption).",
          "So, development creates a piece of software and gives it to operations to watch it and take care of it afterwards? That means that if something breaks in the software, operations has to fix it while actually development knows how it is build. That does not sound very logical, right?"
        ],
        asset: "../../assets/gifs/component3/lesson60/1.3.gif"
      },
      {
        id: 3,
        done: 0,
        lessonID: 60,
        text: [
          "Besides the silos, the waterfall methodology caused some problems. Many projects were facing production delays, misalignment between teams, and poor communication between teams. ",
        ],
        asset: "../../assets/gifs/component3/lesson60/1.4.gif"
      },
      {
        id: 4,
        done: 0,
        lessonID: 60,
        text: [
          "Production delays were mainly caused by the fact that a next phase could only start once the previous phase had been finished. This made the development of software very slow.",
          "Now imagine what would happen if also the requirements or market demands change throughout the process. Total disaster."
        ],
        asset: "../../assets/gifs/component3/lesson60/1.5.gif"
      },
      {
        id: 5,
        done: 0,
        lessonID: 60,
        text: [
          "Misalignment and poor communication between teams, including the silos of development and operations, were also a common problem. The culture was very much focused on doing your own task, and then throwing you work over the wall to the next person who had to work on it. Seems like people were not so aware of the bigger process and ecosystem that they were working in.",
          "Communication did not extend much further than formal documents that marked the end of a phase. Of course, the next person to work on the project had to decipher that fancy document first in order to actually start working on the project."
        ],
        asset: "../../assets/gifs/component3/lesson60/1.6.gif"
      },
      {
        id: 6,
        done: 0,
        lessonID: 60,
        text: [
          "Alright, enough whining about the past. Luckily, DevOps was introduced as a new way of working to prevent these problems. Please do note that at AFKL, we do not work entirely according to the DevOps approach.",
          "DevOps bridges the gap between development and operations, breaking down the different silos that we know from the past."
        ],
        asset: "../../assets/gifs/component3/lesson60/1.7.gif"
      },
      {
        id: 7,
        done: 0,
        lessonID: 60,
        text: [
          "Practically the adoption of the DevOps way of working means that the software development team manages the entire application development lifecycle from beginning to end.",
          "So no more throwing things over the wall and no more communication via fancy documents. Instead, the lifecycle phases will be addressed in short cycli and there is real-time communication between different teams. A huge step forward."
        ],
        asset: "../../assets/gifs/component3/lesson60/1.8.gif"
      },
      {
        id: 8,
        done: 0,
        lessonID: 60,
        text: [
          "The DevOps way of working is focussed on agility, collaboration between different teams, automating the process as much as possible, and measuring performance. Sounds nice, right?",
        ],
        asset: "../../assets/gifs/component3/lesson60/1.9.gif"
      },
    //lesson 61
      {
        id: 9,
        done: 0,
        lessonID: 61,
        text: [
          "So now that you roughly know what it means to work in a DevOps manner, let’s see what the underlying goals of this way of working are.",
        ],
        asset: "../../assets/gifs/component3/lesson61/2.1.gif"
      },
      {
        id: 10,
        done: 0,
        lessonID: 61,
        text: [
          "The main goal behind the DevOps way of working is to optimize the flow of value from idea to end user. This basically means that the following sub-goals will be targeted:",
          "1. Faster time to market",
          "2. Lower failure rates of new releases, with faster mean time to recovery",
          "3. Better communication and collaboration between teams",
          "4. Addressing the (ever changing) needs of the customers"
          ],
        asset: "assets/gifs/component3/lesson61/2.2.gif"
      },
      {
        id: 11,
        done: 0,
        lessonID: 61,
        text: [
          "Faster time to market is mostly reached by automation. For example automated tests.",
          "In order to know if the software that you developed is any good, it is tested. Extensively tested, if you do it well.",
          "Before the time of DevOps and automated tests, the software had to be sent to operations, who had to test it manually. This meant more work to do for operations and long waiting times for development.",
          "When integrating this in the DevOps way of working by having automated tests, the amount of work and waiting times decrease. This allows software developers to focus more on other tasks, which means faster software delivery."
        ],
        asset: "../../assets/gifs/component3/lesson61/2.3.gif"
      },
      {
        id: 12,
        done: 0,
        lessonID: 61,
        text: [
          "Lower failure rates of new releases and faster mean time to recovery are reached by agile (programming) practices introduced by DevOps.",
          "Short development cycles with frequent code versions and revisions help to track when and where the software breaks down due to bad code. If a failure is detected, the team can easily roll back to an earlier version of the code, which had already proven to work well. Furthermore, the small changes between different code versions make that it is easier to recover from problems, as only a small part of the code causes the problem and has to be changed."
        ],
        asset: "../../assets/gifs/component3/lesson61/2.4.gif"
      },
      {
        id: 13,
        done: 0,
        lessonID: 61,
        text: [
          "Better communication and collaboration between teams is another important goal of DevOps. Remember that DevOps tries to bridge the gap between development and operations? Well, how are you going to do that without any communication and collaboration between teams?",
          "The key is to be transparent about the work and to share knowledge, experiences and tools with one another. Why let another team reinvent the wheel if you know how it’s done? This approach might sound logical, but if we think back to the old waterfall days with siloes and fancy documents, we see that it has not always been like this."
        ],
        asset: "../../assets/gifs/component3/lesson61/2.5.gif"
      },
      {
        id: 14,
        done: 0,
        lessonID: 61,
        text: [
          "Finally, DevOps is all about being aware of the end-user. Therefore, we aim to address real customer needs, even though these might change quite frequently. This way, we try to delivery real value to the customer, something they really want to have.",
          "How do we do that? Well, we do something called business monitoring. You will be able to find out more about that under Lesson 10: Monitor."
        ],
        asset: "../../assets/gifs/component3/lesson61/2.6.gif"
      },
    //lesson 62
      {
        id: 15,
        done: 0,
        lessonID: 62,
        text: [
          "Remember the application development lifecycle which is now entirely managed by the software development team? Let’s use the upcoming lessons to go through the different phases of this lifecycle to see what actually happens when working in a DevOps way. To begin with the planning phase.",
          "Before we start with this, please note that different phases can happen simultaneously and might be revisited. Therefore, the order in which they are presented is just a guideline, not the ground truth. Let’s keep it agile, right?"
          ],
        asset: "../../assets/gifs/component3/lesson62/1.1.gif"
      },
      {
        id: 16,
        done: 0,
        lessonID: 62,
        text: [
          "As the name already suggests, during this phase the planning for the upcoming period will be made. All the steps required to go from a service or product idea to a realization that can be given to the customer are to be included in the planning.",
          ],
          asset: "../../assets/gifs/component3/lesson62/1.2.png"
      },
      {
        id: 17,
        done: 0,
        lessonID: 62,
        text: [
          "The development team sits together with the stakeholders, who represent the customer. Together, they determine what the business case is and what will be offered to the customer at the end of the cycle.",
          "The stakeholders will determine (non) functional requirements of the solution and will allocate budget to it. You can find out more about this if you go to Lesson XX: Requirements Analysis."
          ],
          asset: "../../assets/gifs/component3/lesson62/1.3.png"
      },
      {
        id: 18,
        done: 0,
        lessonID: 62,
        text: [
          "When it is clear what the business case is and what will be offered to the customer, the roadmap and approach are determined. The roadmap basically contains the steps that will be executed to get to the final solution, usually with certain milestones along the way. The approach defines how the team will go through the cycle. Within AFKL Digital, Scrum is always the approach. See Topic 1: Scrum to learn more about this.",
          "By the end of this phase, the software development team should know what is expected from them and how to start working."
        ],
        asset: "../../assets/gifs/component3/lesson62/1.4.png"
      },
    //lesson 63
      {
        id: 19,
        done: 0,
        lessonID: 63,
        text: [
          "The next DevOps phase is the coding phase. During this phase, the software is designed and created. For the developers this basically means that they start to write code.",
        ],
        asset: "../../assets/gifs/component3/lesson63/1.1.gif"
      },
      {
        id: 20,
        done: 0,
        lessonID: 63,
        text: [
          "Of course, one cannot start writing code out of nowhere (at least, not if it should be useful code). Typically the step from the planning phase to actually writing code is too big.",
          "What does result from the planning phase is a list of features. Features are basically descriptions of what should be delivered by the end of the cycle in business terms. An example of a feature for the KLM website could be a list of favorite travel destinations. A feature is translated into multiple stories, which tell the programmers what they should do in order to implement that feature. A story could for example say that there should be a button that adds the destination that is being viewed by the user to his/her list of favorite travel destinations."
        ],
        asset: "../../assets/gifs/component3/lesson63/1.2.png"
      },
      {
        id: 21,
        done: 0,
        lessonID: 63,
        text: [
          "Okay, so these programmers start to write their code. But they usually do this as a group right? How do you write code together? Divide the work, maybe? But how do you then make sure that all the code fits together in one big application that works?",
          "You can compare it to writing a book, right? If everyone writes a chapter, how do we make sure that the end product is a coherent story?",
          "Version control, my friend. It is the answer to all your questions."
          ],
          asset: "../../assets/gifs/component3/lesson63/1.3.png"
      },
      {
        id: 22,
        done: 0,
        lessonID: 63,
        text: [
          "When coding, version control is extremely important. Remember that one of the DevOps goals is to have lower failure rates of new releases and faster mean time to recovery? This is realized by constantly keeping track of different versions of the code.",
          "Typically, there is one ‘master code’, which is the code that works perfectly. It is so perfect, you would almost be afraid to touch it. Therefore, this code is not touched unless we are completely sure that the addition or change works perfectly as well."
          ],
        asset: "../../assets/gifs/component3/lesson63/1.4.png"
      },
      {
        id: 23,
        done: 0,
        lessonID: 63,
        text: [
          "Every developer works on a smaller part of the master code. They usually call this a ‘branch’. Whenever a developer makes a change to his/her part of the code, this is uploaded to the version control system (‘git’ as most developers call it) and tested (automatically of course, remember?).",
          "If the code change works perfectly, it will be added to the master code. If the code change does not work perfectly, it is of course not added to the master code and the programmer responsible for it has to get back to work to make it work perfectly for the next time. Of course, fellow programmers might help him/her in this case! Since everyone works together."
          ],
        asset: "../../assets/gifs/component3/lesson63/1.5.png"
      },
    //lesson 64
      {
        id: 24,
        done: 0,
        lessonID: 64,
        text: [
          "Once the code has been written, the developers should make a build out of it. Making a build is also called ‘compiling’ the code.",
          "Making a build basically means that the code is converted from source code to object code."
        ],
        asset: "../../assets/gifs/component3/lesson64/1.1.gif"
      },
      {
        id: 25,
        done: 0,
        lessonID: 64,
        text: [
          "Source code is the code as it was written by the programmer(s). For example, a nice piece of PHP. Unfortunately, this nice piece of PHP cannot run as an application on every device. It will only run if you have an IDE, integrated development environment, installed on your device and open the code through there.",
          "So, sadly, if you send your nice PHP code to your friends and they don’t have the right IDE installed, they will just see lines of code instead of your beatiful application. Too bad…"
        ],
        asset: "../../assets/gifs/component3/lesson64/1.2.png"
      },
      {
        id: 26,
        done: 0,
        lessonID: 64,
        text: [
          "This is why we make a build and convert the source code to object code. Object code is basically a package that can be read by an operating system (Windows, Mac or Linux). You could call it an application. Something stand-alone that a computer can run. This means that if you make a build of your code for Windows, you can send it to all your friends who have a Windows PC and they will be able to open and run it without having the IDE installed. Yay, finally people see your beautiful application!",
          "Unfortunately, your Mac friends will be left out… Since Windows builds don’t work on Mac and vice versa (try downloading software from another operating system to your PC, you won’t be able to install it)."
        ],
        asset: "../../assets/gifs/component3/lesson64/1.3.png"
      },
      {
        id: 27,
        done: 0,
        lessonID: 64,
        text: [
          "You could would compare the process of making a build to the creation of a movie. At first, there is only the script, which is the source code. When opening the script, it is just a bunch of lines of text. You can see what will happen in the story, but you have to imagine it yourself.",
          "Once the movie is produced, a build is made of the script, which turns it into object code. We can display it on the screen and see the movie running in front of our eyes. Much more user friendly than reading through an entire script and having to imagine what it would look like, right?"
        ],
        asset: "../../assets/gifs/component3/lesson64/1.4.png"
      },
    //TESTLESSON
      {
        id: 28,
        done: 0,
        text: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur mattis nisl mollis semper. Maecenas volutpat ornare sem, sed fermentum purus vulputate at. Phasellus tellus erat, ullamcorper vel facilisis maximus, lacinia vel neque. Aliquam erat volutpat. Nam ultrices magna quis ex imperdiet, sit amet consectetur elit rhoncus. Nulla lobortis faucibus diam nec iaculis. Donec mattis euismod finibus. Fusce rutrum suscipit malesuada. Aliquam tincidunt sollicitudin augue tempus euismod.  ",
          "Maecenas nec consectetur turpis. Praesent elementum justo ac ante ullamcorper, non rutrum erat pharetra. Phasellus vel odio varius elit dignissim dictum. Suspendisse sagittis mi vitae luctus consequat. Suspendisse volutpat luctus ex, sed fermentum velit mattis vel. Proin mollis justo sit amet ligula elementum, sed congue nisl lacinia. Phasellus vitae eleifend neque. Quisque ultrices finibus viverra. Mauris tortor erat, imperdiet sed porttitor at, suscipit vel quam. Morbi dictum auctor ipsum. Duis quis nulla sem. Vestibulum commodo enim sed rhoncus tristique. In hac habitasse platea dictumst. "
        ],
        asset: 'NONE'
      },
      {
        id: 29,
        done: 0,
        text: [
          "You are only ", 
          " more lesson(s) and a quiz away from your ",
          " badge" 
        ],
        asset: 'NONE'
      },
      
    //lesson 65
      {
        id: 30,
        done: 0,
        lessonID: 65,
        text: [
          "Of course, the main goal of the test phase is to test the code. Tests can happen manually or automatically. As you may expect by now, we prefer to do it automatically as much as possible.",
          "It is important to test your code thoroughly. Why? Well, imagine what would happen if you give you application to the consumer and during use it suddenly stops functioning properly? Or even worse, what if the application causes serious security threats? This will for sure cause some angry or disappointed users. So let’s try to prevent that."
        ],
        asset: "../../assets/gifs/component3/lesson65/1.1.gif"
      },
      {
        id: 31,
        done: 0,
        lessonID: 65,
        text: [
          "During this phase, we do the functional tests. A functional is basically done to determine whether the software does what it should do. Different types of functional tests can be identified. Examples are unit tests, integration tests, and system tests."
        ],
        asset: "../../assets/gifs/component3/lesson65/1.2.png"
      },
      {
        id: 32,
        done: 0,
        lessonID: 65,
        text: [
          "Unit tests usually already happen during the build process. A unit test is the test of an individual unit, or component, of the software. A unit is the smallest testable part of the code.",
          "Let’s refer back to writing the code. We do this together, everyone writes small parts. How do we know if these small parts function properly? By having unit tests!"
        ],
        asset: "../../assets/gifs/component3/lesson65/1.3.png"
      },
      {
        id: 33,
        done: 0,
        lessonID: 65,
        text: [
          "So, let’s say that all unit tests were successful. Yay! Now our code is fit for becoming one big application, right? Well, I might have to disappoint you.",
          "The fact that all units of code work fine on their own does not necessarily mean that they also function well together. And that is why we do integration tests. ",
          "With an integration test, the individual units are combined and tested as a group. If some units do not interact properly, we will find out now!"
        ],
        asset: "../../assets/gifs/component3/lesson65/1.4.png"
      },
      {
        id: 34,
        done: 0,
        lessonID: 65,
        text: [
          "As you might already expect, we are not there yet. After the integration tests, we still need to do system tests. We combine all the groups that successfully made it through the integration tests and test the complete software.",
        ],
        asset: "../../assets/gifs/component3/lesson65/1.5.png"
      },
      {
        id: 35,
        done: 0,
        lessonID: 65,
        text: [
          "Let’s compare the functional testing process to the creation of a car. First, several units are made, such as nuts and bolts, rims, and tires. All these units are unit tested to see if they fulfill the function that they should.",
          "Then, several units are integrated into a bigger part, for example the rims and tires to get to a wheel. This wheel is integration tested to see if the different units function together in such a way that we have a proper wheel.",
          "Finally, all the different integrated parts are combined into what we can call a car. The wheels, the engine, the seats, et cetera. This entire car undergoes a system test to see if all the different components work well together and if it can be driven safely."
        ],
        asset: "../../assets/gifs/component3/lesson65/1.6.png"
      },
    //lesson 66
      {
        id: 36,
        done: 0,
        lessonID: 66,
        text: [
          "The next DevOps phase is the Release phase. During this phase we determine if the software meets the (non) functional requirements that were set at the beginning of the cycle, during the planning phase.",
        ],
        asset: "../../assets/gifs/component3/lesson66/1.1.gif"
      },
      {
        id: 37,
        done: 0,
        lessonID: 66,
        text: [
          "So, how do we determine if the software meets the (non) functional requirements? ",
          "We basically already did this by having the functional tests. However, there might be one more test that is needed to be entirely sure: the acceptance test."
        ],
        asset: "../../assets/gifs/component3/lesson66/1.2.png"
      },
      {
        id: 38,
        done: 0,
        lessonID: 66,
        text: [
          "As the name already suggests, an acceptance test tests the software for acceptability during use. Therefore, it is sometimes also called a user acceptance test.",
          "In fact, different types of acceptance tests exist: alpha & beta testing, contract acceptance testing, regulation acceptance testing, operational acceptance testing, and black box testing."
        ],
        asset: "../../assets/gifs/component3/lesson66/1.3.png"
      },
      {
        id: 39,
        done: 0,
        lessonID: 66,
        text: [
          "Alpha & beta testing, or AB testing, consists of basically two phases.",
          "During alpha testing, the software is tested in the development environment. Different developers and testers might perform the test. The feedback will be used by the development team to improve the software.",
          "During beta testing, the software is taken out of the development environment and into the ‘real world’. Potential end users are asked to interact with the software and to give their feedback. An example of this is going to the lounge at Schiphol Airport to test KLM’s mobile app with real users who are present there. Of course, their feedback is taken into account for improvements.",
        ],
        asset: "../../assets/gifs/component3/lesson66/1.4.png"
      },
      {
        id: 40,
        done: 0,
        lessonID: 66,
        text: [
          "Contract acceptance testing is important when the development team has signed a contract with a client. This test will be held to find out if the software complies with the contract.",
          "At AFKL, this never happens, since we do not make software for external clients. Hence, no contract compliances need to be tested."
        ],
        asset: "../../assets/gifs/component3/lesson66/1.5.png"
      },
      {
        id: 41,
        done: 0,
        lessonID: 66,
        text: [
          "Regulation acceptance testing, also referred to as compliance acceptance testing, is done to test whether the software complies with legal regulations. Examples of legal regulation that should be adhered to are GDPR or PCI compliancy. Go to Topic 16: Legal Regulations to find out more about this.",
        ],
        asset: "../../assets/gifs/component3/lesson66/1.6.png"
      },
      {
        id: 42,
        done: 0,
        lessonID: 66,
        text: [
          "Operational acceptance testing, or operational readiness testing, is executed to ensure that the software can be used (operated) in an acceptable way. This is a non-functional requirements test which could, for example, focus on security or load on the application."
        ],
        asset: "../../assets/gifs/component3/lesson66/1.7.png"
      },
      {
        id: 43,
        done: 0,
        lessonID: 66,
        text: [
          "During black box testing the software is regarded as a black box. This means that the tester is not aware of the application code, it is like a black box to the tester. Instead, the tester is focussed on giving the software certain inputs and determining whether the outputs that it gives back meet the functional requirements."
        ],
        asset: "../../assets/gifs/component3/lesson66/1.8.png"
      },
    //lesson 67
      {
        id: 44,
        done: 0,
        lessonID: 67,
        text: [
          "When all the previous phases have been completed successfully, the software can finally be given to the user! This is what happens during the Deploy phase."
        ],
        asset: "../../assets/gifs/component3/lesson67/1.1.gif"
      },
      {
        id: 45,
        done: 0,
        lessonID: 67,
        text: [
          "So, “giving the software to the user”, how do we do that? It is actually quite simple. We install the software that we coded, built, and tested on a server, and from then on the user can access it.",
          "If we have, for example, been developing something new for the KLM website, the user can only see it on the live website once we deployed the code to the server. Therefore, we say that the software is “live” once we have deployed it."
        ],
        asset: "../../assets/gifs/component3/lesson67/1.2.png"
      },
      {
        id: 46,
        done: 0,
        lessonID: 67,
        text: [
          "We wouldn’t be still talking about DevOps if we didn’t try to automate the deployment process as much as possible. This is what we call the deployment pipeline, or the delivery pipeline at AFKL. This will be addressed further under Topic 11: Delivery Pipeline."
        ],
        asset: "../../assets/gifs/component3/lesson67/1.3.png"
      },
    //lesson 68
      {
        id: 47,
        done: 0,
        lessonID: 68,
        text: [
          "Alright, the software has been created and given to the customer, guess we are done!",
          "Well, not exactly. Don’t underestimate the effort it takes to keep the software up and running. This is what happens during the Operate phase."
        ],
        asset: "../../assets/gifs/component3/lesson68/1.1.gif"
      },
      {
        id: 48,
        done: 0,
        lessonID: 68,
        text: [
          "Keeping your software up and running is quite important if you want to keep your customers happy, but also if you want to make revenues.",
          "Imagine you, as a customer, want to buy a plane ticket for your vacation but AFKL’s website is down. That would be a shame! You have to find another airline’s website to book your tickets and AFKL would not make any revenue. Sounds like a loose-loose situation. Unfortunately, these things happen if the operate phase is not taken into account properly."
        ],
        asset: "../../assets/gifs/component3/lesson68/1.2.png"
      },
      {
        id: 49,
        done: 0,
        lessonID: 68,
        text: [
          "So how do we do this? Well, actually there are multiple processes involved: infrastructure management, application management, information management, and incident management."
        ],
        asset: "../../assets/gifs/component3/lesson68/1.3.png"
      },
      {
        id: 50,
        done: 0,
        lessonID: 68,
        text: [
          "As the name already suggests, infrastructure management deals with the IT infrastructure. Unfortunately, IT infrastructure is a rather broad term and quite difficult to grasp. It can mean anything from hardware, software, network components, and even much more in the IT environment that should be in place in order to be able to provide IT services, such as your application.",
          "This might sound like a distant thing to you, but actually you are using IT infrastructure all the time. Think about sending an e-mail. Part of the infrastructure are your laptop or phone (hardware component), the e-mailing application (software component), and the router (network component)."
        ],
        asset: "../../assets/gifs/component3/lesson68/1.4.png"
      },
      {
        id: 51,
        done: 0,
        lessonID: 68,
        text: [
          "Application management is about managing the application throughout its lifecycle. As you might realize by now, the application lifecycle is basically what we are discussing through the DevOps phases. So, actually we were already doing this.",
        ],
        asset: "../../assets/gifs/component3/lesson68/1.5.png"
      },
      {
        id: 52,
        done: 0,
        lessonID: 68,
        text: [
          "Information management is about managing the data in the application. For AFKL specifically, this might be about data concerning flight times, weather forecasts, pilots, employees, or passengers. As you might expect, this is a lot of data and some of it is very confidential. How to manage the huge amounts of data and how to keep it safe are things that information management is concerned with."
        ],
        asset: "../../assets/gifs/component3/lesson68/1.6.png"
      },
      {
        id: 53,
        done: 0,
        lessonID: 68,
        text: [
          "At AFKL, the most important process during this phase is Incident Management. An incident is an event that disrupts the application, and therefore disrupts the organization’s operation and services.",
          "If an incident happens, it means that the team responsible for the application needs to solve this. Immediately. It is therefore possible that a developer will get a call in the middle of the night saying that an incident is found and needs to be solved. You can go to Topic 19: Incident Management at AFKL to find out more about this."
        ],
        asset: "../../assets/gifs/component3/lesson68/1.7.png"
      },
      {
        id: 54,
        done: 0,
        lessonID: 68,
        text: [
          "As you might begin to realize, these three processes should not be started once our application is live. Instead, they should be taken into account from the beginning of the application life cycle already."
        ],
        asset: "../../assets/gifs/component3/lesson68/1.8.png"
      },
    //lesson 69
      {
        id: 55,
        done: 0,
        lessonID: 69,
        text: [
          "The final phase to discuss is the Monitor phase. We already saw that the Operate phase is concerned with keeping the software application up and running. That’s really nice. But how do we know when there is something wrong with the application, something that prevents it from being up and running (or might potentially prevent it at a later time)?",
          "Well, that is why we monitor. We keep an eye on the software application to see if any incidents occur. If not, perfect. Otherwise, we obviously have to do something about this."
        ],
        asset: "../../assets/gifs/component3/lesson69/1.1.gif"
      },
      {
        id: 56,
        done: 0,
        lessonID: 69,
        text: [
          "There are basically two kinds of monitoring: technical monitoring and business monitoring.",
        ],
        asset: "../../assets/gifs/component3/lesson69/1.2.png"
      },
      {
        id: 57,
        done: 0,
        lessonID: 69,
        text: [
          "Technical monitoring is about monitoring the application from a technical perspective. During technnical monitoring we focus on events and incidents. An event is something that can occur in the application, while an incident is an event that negatively affects the application. If you want to find out more about this, please go to Topic 19: Incident Management at AFKL."
        ],
        asset: "../../assets/gifs/component3/lesson69/1.3.png"
      },
      {
        id: 58,
        done: 0,
        lessonID: 69,
        text: [
          "Business monitoring is a bit different from technical monitoring, as it looks at the business side of the application. Examples are monitoring the amount of visitors on the website, or the behaviour of customers who book flights. From this data, we might be able to make better decisions about what we should offer through our applications and how." 
        ],
        asset: "../../assets/gifs/component3/lesson69/1.4.png"
      },
    //lesson 70
      {
        id: 59,
        done: 0,
        lessonID: 70,
        text: [
          "So, you might be wondering, how is DevOps practiced at AFKL? Well, AFKL still has Development and Operations as two different departments (if you want to know more about this, have a look at Topic 6: IT Departments). Sounds like we are still working in the old silos…"
        ],
        asset: "../../assets/gifs/component3/lesson70/1.1.png"
      },
      {
        id: 60,
        done: 0,
        lessonID: 70,
        text: [
          "Luckily, this is not true. AFKL is actively stimulating its development teams to adopt the DevOps way of working. How? By stimulating an Agile way of working in the product teams, by offering the teams Self Services, and by offering tooling for an automated delivery pipeline.",

        ],
        asset: "../../assets/gifs/component3/lesson70/1.2.png"
      },
      {
        id: 61,
        done: 0,
        lessonID: 70,
        text: [
          "There are multiple ways in which AFKL tries to stimulate the Agile way of working. For now it might be most important to know that the development of our B2C software applications is done in small product teams which work in short cycles according to Scrum and SAFe. If you want to find out more about this, have a look at Topic 1: Scrum and Topic 2: SAFe."
        ],
        asset: "../../assets/gifs/component3/lesson70/1.3.png"
      },
      {
        id: 62,
        done: 0,
        lessonID: 70,
        text: [
          "AFKL’s Self Services can be described as “the pragmatic approach to DevOps within AFKL”. Self Services are tracks that stimulate AFKL’s product teams to take responsibility of more and more tasks that were traditionally done by Operations. These tasks include setting the application to live, security scans, performance tests, and application support. You can find more information about this under Topic 10: Self Services.",
          "The Operations department is still accountable for these tasks, but the aim is that the product teams learn to do more and more of it by themselves."
        ],
        asset: "../../assets/gifs/component3/lesson70/1.4.png"
      },
      {
        id: 63,
        done: 0,
        lessonID: 70,
        text: [
          "And last but not least, the tooling for an automated delivery pipeline. As said before, DevOps is all about automating the processes around software development, delivery and maintenance. Part of this is an automated delivery pipeline, which means as much as having an automated way in which the software is released.",
          "Although this might sound easy, an entire pipeline has to be in place in order to make sure that things go smoothly. AFKL’s DevOps department works on the tooling for the delivery pipeline that the teams have to work with. To learn more about this, please go to Topic 11: Delivery Pipeline."
        ],
        asset: "../../assets/gifs/component3/lesson70/1.5.png"
      },
  
    ]
  
  
  badges: Object = [
    {id: 1, title: 'Scrum Badge', image: '../../../assets/badges/1.svg'},
    {id: 2, title: 'SAFe Badge', image: '../../../assets/badges/2.svg'},
    {id: 3, title: 'Digital ARPs Badge', image: '../../../assets/badges/3.svg'},
    {id: 4, title: 'Front-end & Back-end Badge', image: '../../../assets/badges/4.svg'},
    {id: 5, title: 'Digital Products Badge', image: '../../../assets/badges/5.svg'},
    {id: 6, title: 'IT Departement badge', image: '../../../assets/badges/6.svg'},
    {id: 7, title: 'E-Commerce badge', image: '../../../assets/badges/7.svg'},
    {id: 8, title: 'Software Development Process Badge', image: '../../../assets/badges/8.svg'},
    {id: 9, title: 'DevOps Badge', image: '../../../assets/badges/9.svg'},
    {id: 10, title: 'Self Service badge', image: '../../../assets/badges/10.svg'},
    {id: 11, title: 'Delivery Pipeline Badge', image: '../../../assets/badges/11.svg'},
    {id: 12, title: 'Application Architecture Badge', image: '../../../assets/badges/12.svg'},
    {id: 13, title: 'IT Securatiy Badge', image: '../../../assets/badges/13.svg'},
    {id: 14, title: 'Application Securaty Scanning Badge', image: '../../../assets/badges/14.svg'},
    {id: 15, title: 'Datacenter & Cloud Badge', image: '../../../assets/badges/15.svg'},
    {id: 16, title: 'Legal Regulations Badge', image: '../../../assets/badges/16.svg'},
    {id: 17, title: 'IT Service Management Badge', image: '../../../assets/badges/17.svg'},
    {id: 18, title: 'Change Management badge', image: '../../../assets/badges/18.svg'},
    {id: 19, title: 'Incident Management Badge', image: '../../../assets/badges/19.svg'},
    ]
  people: Object = [
    {id: 1, firstName: "Jennifer", surName: "Cyr", email: "Jennifer.Cyr@KLM.com", PhoneNumber: "248-884-7485", badgeID: 9}
  ]




  constructor() { }
  getComp() {
    const comp = this.components;
    return comp;
  }
  
  getTopic() {
    const topics = this.topics;
    return topics;
  }

  getLessons(){
    const lessons = this.lessons;
    return lessons;
  }
  
  getPages(){
    const pages = this.pages;
    return pages;
  }

  getQuiz(){
    const quiz = this.quizes;
    return quiz;
  }

  getPeople(){
    const people = this.people;
    return people;
  }

  setPages(row){
    this.pages[row.id].done = 100;
  }
  removePages(row){
    this.pages[row.id].done = 0;
  }

  howManyLessons(topic){
    var lessonsLeft = topic.lessons.length;
    lessonsLeft = lessonsLeft -1;
    return lessonsLeft;
    
  }

  calcPercentage(allAchievedOrNot){
    var amount = 0;
    var result;
    for(let i =0; i<allAchievedOrNot.length; i++){
      if(allAchievedOrNot[i].done !== 0){
        amount = amount + allAchievedOrNot[i].done;
      } 
      result = amount/allAchievedOrNot.length;
      result = result.toFixed(1);
    }
    return result;
  }
}

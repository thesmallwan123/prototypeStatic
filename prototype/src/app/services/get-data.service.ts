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

  topics: Object = [
    {id: 1, done: 0, lessons:[1], badgeID: 1, title: "Scrum", description: "How we work according to the Scrum framework"},
    {id: 2, done: 0, lessons:[1], badgeID: 1, title: "SAFe", description: "How our Agile practises are scaled in a common framework"},
    {id: 3, done: 0, lessons:[1], badgeID: 1, title: "Digital Agile Release Planes", description: "An overview of the diffrent Digital Agile Release Planes"},
    {id: 4, done: 0, lessons:[1], badgeID: 2, title: "Front-end and back-end", description: "The diffrence between front-ends and back-ends"},
    {id: 5, done: 0, lessons:[1], badgeID: 2, title: "AFKL's digitals produts", description: "And overview of all the digital B2C products of AFKL"},
    {id: 6, done: 0, lessons:[1], badgeID: 3, title: "IT Departement", description: "Get to know the four IT departements of AFKL"},
    {id: 7, done: 0, lessons:[1], badgeID: 3, title: "E-Commerce", description: "learn about the E-Commerce departement and its groups"},
    {id: 8, done: 0, lessons:[1], badgeID: 4, title: "Development Process", description: "The diffrent stages of the software development process"},
    {id: 9, done: 0, lessons:[60, 61, 62, 63, 64, 65], badgeID: 4, title: "DevOps", description: "The integration of development and operations in one process"},
    {id: 10, done: 0, lessons:[1], badgeID: 4, title: "Self Service", description: "AFKL's Self Servies as a wat to implement DevOps"},
    {id: 11, done: 0, lessons:[1], badgeID: 4, title: "Delivery Pipeline", description: "How to delivery of software has been automated in one pipeline"},
    {id: 12, done: 0, lessons:[1], badgeID: 5, title: "Architecture Overview", description: "Overview of the architecture of AFKL's Digital applications"},
    {id: 13, done: 0, lessons:[1], badgeID: 6, title: "IT Security", description: "get to know the diffrent kinds of IT security"},
    {id: 14, done: 0, lessons:[1], badgeID: 6, title: "Application Security Planning", description: "Application sucurity scans and AFKL;s Self Service Security Scan"},
    {id: 15, done: 0, lessons:[1], badgeID: 6, title: "Datacenter vs. Cloud", description: "Security related to hosting at a datacenter versus the cloud"},
    {id: 16, done: 0, lessons:[1], badgeID: 6, title: "PCI Compliancy", description: "How to deal with passenger information"},
    {id: 17, done: 0, lessons:[1], badgeID: 7, title: "Process", description: "The diffrent IT Service Management processes"},
    {id: 18, done: 0, lessons:[1], badgeID: 7, title: "Change Managment at AFKL", description: "How change management is practised at AFKL"},
    {id: 19, done: 0, lessons:[1], badgeID: 7, title: "Incident Management at AFKL", description: "How incident management is practised at AFKL"},
    ]
  
  lessons: Object = [
    {id: 0, done: 0,title: "This is basic test", pageID:[28]},
    {id: 1, done: 0,title: "This is basic test", pageID:[28, 29]},
    {id: 2, done: 0,title: "This is basic test", pageID:[28, 29]},
    {id: 3, done: 0,title: "This is basic test", pageID:[28, 29]},
    {id: 4, done: 0,title: "This is basic test", pageID:[28, 29]},
    {id: 5, done: 0,title: "This is basic test", pageID:[28, 29]},
    {id: 6, done: 0,title: "This is basic test", pageID:[28, 29]},
    {id: 7, done: 0,title: "This is basic test", pageID:[28, 29]},
    {id: 8, done: 0,title: "This is basic test", pageID:[28, 29]},
    {id: 9, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 10, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 11, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 12, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 13, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 14, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 15, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 16, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 17, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 18, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 19, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 20, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 21, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 22, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 23, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 24, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 25, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 26, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 27, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 28, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 29, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 30, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 31, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 32, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 33, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 34, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 35, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 36, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 37, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 38, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 39, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 40, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 41, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 42, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 43, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 44, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 45, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 46, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 47, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 48, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 49, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 50, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 51, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 52, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 53, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 54, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 55, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 56, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 57, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 58, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 59, done: 0, title: "This is basic test", pageID:[28, 29]},
    {id: 60, done: 0, title: "Basic Explanation", pageID:[0,1,2,3,4,5,6,7,8,29]},
    {id: 61, done: 0, title: "DevOps Goals", pageID:[9,10,11,12,13,14,29]},
    {id: 62, done: 0, title: "Plan", pageID:[15,16,17,18,29]},
    {id: 63, done: 0, title: "Code", pageID:[19,20,21,22,23,29]},
    {id: 64, done: 0, title: "Build", pageID:[24,25,26,27,29]},
    {id: 65, done: 0, title: "Testing", pageID:[28, 29]},
    ]
  pages: Object = [
    //lesson 60
      {
        id: 0,
        done: 0,
        lessonID: 60,
        text: [
          "So, you might be here because you are wondering what is meant by this buzzword DevOps. To give you a definition, DevOps is “… a culture shift designed to improve quality of solutions that are business-oriented and rapidly evolving and can be easily molded to today’s needs” [1].",
          "DevOps is “… a culture shift designed to improve quality of solutions that are business-oriented and rapidly evolving and can be easily molded to today’s needs” [1]"
        ],
        asset: "../../assets/gifs/component3/lesson60/1.1"
      },
      {
        id: 1,
        done: 0,
        lessonID: 60,
        text: [
          "Let’s first take a look back into history. Back in the days, before DevOps, software development at AFKL and many other companies happened according to the waterfall methodology. The waterfall methodology consists of the different software development phases, which happen in linear sequence. This means that the next phase only starts once the phase before it has been finished.",
          "The different phases of the waterfall methodology are the requirements phase, design phase, implementation phase, verification phase, and the maintenance phase. Go to Topic 8: Software Development Process to get more information about the different phases."
        ],
        asset: "../../assets/gifs/component3/lesson60/1.2"
      },
      {
        id: 2,
        done: 0,
        lessonID: 60,
        text: [
          "During the time of the waterfall methodology, development and operations were two different silos which were quite separated from each other. Development would worry about the creation of the software, throw it “over the wall” to operations, who had to maintain the software as long as it was alive (this almost sounds like giving away your child for adoption).",
          "So, development creates a piece of software and gives it to operations to watch it and take care of it afterwards? That means that if something breaks in the software, operations has to fix it while actually development knows how it is build. That does not sound very logical, right?"
        ],
        asset: "../../assets/gifs/component3/lesson60/1.3"
      },
      {
        id: 3,
        done: 0,
        lessonID: 60,
        text: [
          "Besides the silos, the waterfall methodology caused some problems. Many projects were facing production delays, misalignment between teams, and poor communication between teams. ",
        ],
        asset: "../../assets/gifs/component3/lesson60/1.4"
      },
      {
        id: 4,
        done: 0,
        lessonID: 60,
        text: [
          "Production delays were mainly caused by the fact that a next phase could only start once the previous phase had been finished. This made the development of software very slow. ",
          "Now imagine what would happen if also the requirements or market demands change throughout the process. Total disaster."
        ],
        asset: "../../assets/gifs/component3/lesson60/1.5"
      },
      {
        id: 5,
        done: 0,
        lessonID: 60,
        text: [
          "Misalignment and poor communication between teams, including the silos of development and operations, were also a common problem. The culture was very much focused on doing your own task, and then throwing you work over the wall to the next person who had to work on it. Seems like people were not so aware of the bigger process and ecosystem that they were working in.",
          "Communication did not extend much further than formal documents that marked the end of a phase. Of course, the next person to work on the project had to decipher that fancy document first in order to actually start working on the project."
        ],
        asset: "../../assets/gifs/component3/lesson60/1.6"
      },
      {
        id: 6,
        done: 0,
        lessonID: 60,
        text: [
          "Alright, enough whining about the past. Luckily, DevOps was introduced as a new way of working to prevent these problems. Please do note that at AFKL, we do not work entirely according to the DevOps approach.",
          "DevOps bridges the gap between development and operations, breaking down the different silos that we know from the past."
        ],
        asset: "../../assets/gifs/component3/lesson60/1.7"
      },
      {
        id: 7,
        done: 0,
        lessonID: 60,
        text: [
          "Practically the adoption of the DevOps way of working means that the software development team manages the entire application development lifecycle from beginning to end.",
          "So no more throwing things over the wall and no more communication via fancy documents. Instead, the lifecycle phases will be addressed in short cycli and there is real-time communication between different teams. A huge step forward."
        ],
        asset: "../../assets/gifs/component3/lesson60/1.8"
      },
      {
        id: 8,
        done: 0,
        lessonID: 60,
        text: [
          "The DevOps way of working is focussed on agility, collaboration between different teams, automating the process as much as possible, and measuring performance. Sounds nice, right?",
        ],
        asset: "../../assets/gifs/component3/lesson60/1.9"
      },
    //lesson 61
      {
        id: 9,
        done: 0,
        lessonID: 61,
        text: [
          "So now that you roughly know what it means to work in a DevOps manner, let’s see what the underlying goals of this way of working are.",
        ],
        asset: "../../assets/gifs/component3/lesson61/2.1"
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
        asset: "assets/gifs/component3/lesson61/2.2"
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
        asset: "../../assets/gifs/component3/lesson61/2.3"
      },
      {
        id: 12,
        done: 0,
        lessonID: 61,
        text: [
          "Lower failure rates of new releases and faster mean time to recovery are reached by agile (programming) practices introduced by DevOps.",
          "Short development cycles with frequent code versions and revisions help to track when and where the software breaks down due to bad code. If a failure is detected, the team can easily roll back to an earlier version of the code, which had already proven to work well. Furthermore, the small changes between different code versions make that it is easier to recover from problems, as only a small part of the code causes the problem and has to be changed."
        ],
        asset: "../../assets/gifs/component3/lesson61/2.4"
      },
      {
        id: 13,
        done: 0,
        lessonID: 61,
        text: [
          "Better communication and collaboration between teams is another important goal of DevOps. Remember that DevOps tries to bridge the gap between development and operations? Well, how are you going to do that without any communication and collaboration between teams?",
          "The key is to be transparent about the work and to share knowledge, experiences and tools with one another. Why let another team reinvent the wheel if you know how it’s done? This approach might sound logical, but if we think back to the old waterfall days with siloes and fancy documents, we see that it has not always been like this."
        ],
        asset: "../../assets/gifs/component3/lesson61/2.5"
      },
      {
        id: 14,
        done: 0,
        lessonID: 61,
        text: [
          "Finally, DevOps is all about being aware of the end-user. Therefore, we aim to address real customer needs, even though these might change quite frequently. This way, we try to delivery real value to the customer, something they really want to have.",
          "How do we do that? Well, we do something called business monitoring. You will be able to find out more about that under Lesson 10: Monitor."
        ],
        asset: "../../assets/gifs/component3/lesson61/2.6"
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
        asset: "../../assets/gifs/component3/lesson62/1.1"
      },
      {
        id: 16,
        done: 0,
        lessonID: 62,
        text: [
          "As the name already suggests, during this phase the planning for the upcoming period will be made. All the steps required to go from a service or product idea to a realization that can be given to the customer are to be included in the planning.",
          ],
        asset: "../../assets/gifs/component3/lesson62/1.2"
      },
      {
        id: 17,
        done: 0,
        lessonID: 62,
        text: [
          "The development team sits together with the stakeholders, who represent the customer. Together, they determine what the business case is and what will be offered to the customer at the end of the cycle.",
          "The stakeholders will determine (non) functional requirements of the solution and will allocate budget to it. You can find out more about this if you go to Lesson XX: Requirements Analysis."
          ],
        asset: "../../assets/gifs/component3/lesson62/1.3"
      },
      {
        id: 18,
        done: 0,
        lessonID: 62,
        text: [
          "When it is clear what the business case is and what will be offered to the customer, the roadmap and approach are determined. The roadmap basically contains the steps that will be executed to get to the final solution, usually with certain milestones along the way. The approach defines how the team will go through the cycle. Within AFKL Digital, Scrum is always the approach. See Topic 1: Scrum to learn more about this.",
          "By the end of this phase, the software development team should know what is expected from them and how to start working."
          ],
        asset: "../../assets/gifs/component3/lesson62/1.4"
      },
    //lesson 63
      {
        id: 19,
        done: 0,
        lessonID: 63,
        text: [
          "The next DevOps phase is the coding phase. During this phase, the software is designed and created. For the developers this basically means that they start to write code.",
        ],
        asset: "../../assets/gifs/component3/lesson63/1.1"
      },
      {
        id: 20,
        done: 0,
        lessonID: 63,
        text: [
          "Of course, one cannot start writing code out of nowhere (at least, not if it should be useful code). Typically the step from the planning phase to actually writing code is too big.",
          "What does result from the planning phase is a list of features. Features are basically descriptions of what should be delivered by the end of the cycle in business terms. An example of a feature for the KLM website could be a list of favorite travel destinations. A feature is translated into multiple stories, which tell the programmers what they should do in order to implement that feature. A story could for example say that there should be a button that adds the destination that is being viewed by the user to his/her list of favorite travel destinations."
          ],
        asset: "../../assets/gifs/component3/lesson63/1.2"
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
        asset: "../../assets/gifs/component3/lesson63/1.3"
      },
      {
        id: 22,
        done: 0,
        lessonID: 63,
        text: [
          "When coding, version control is extremely important. Remember that one of the DevOps goals is to have lower failure rates of new releases and faster mean time to recovery? This is realized by constantly keeping track of different versions of the code.",
          "Typically, there is one ‘master code’, which is the code that works perfectly. It is so perfect, you would almost be afraid to touch it. Therefore, this code is not touched unless we are completely sure that the addition or change works perfectly as well."
          ],
        asset: "../../assets/gifs/component3/lesson63/1.4"
      },
      {
        id: 23,
        done: 0,
        lessonID: 63,
        text: [
          "Every developer works on a smaller part of the master code. They usually call this a ‘branch’. Whenever a developer makes a change to his/her part of the code, this is uploaded to the version control system (‘git’ as most developers call it) and tested (automatically of course, remember?).",
          "If the code change works perfectly, it will be added to the master code. If the code change does not work perfectly, it is of course not added to the master code and the programmer responsible for it has to get back to work to make it work perfectly for the next time. Of course, fellow programmers might help him/her in this case! Since everyone works together."
          ],
        asset: "../../assets/gifs/component3/lesson63/1.5"
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
        asset: "../../assets/gifs/component3/lesson64/1.1"
      },
      {
        id: 25,
        done: 0,
        lessonID: 64,
        text: [
          "Source code is the code as it was written by the programmer(s). For example, a nice piece of PHP. Unfortunately, this nice piece of PHP cannot run as an application on every device. It will only run if you have an IDE, integrated development environment, installed on your device and open the code through there.",
          "So, sadly, if you send your nice PHP code to your friends and they don’t have the right IDE installed, they will just see lines of code instead of your beatiful application. Too bad…"
        ],
        asset: "../../assets/gifs/component3/lesson64/1.2"
      },
      {
        id: 26,
        done: 0,
        lessonID: 64,
        text: [
          "This is why we make a build and convert the source code to object code. Object code is basically a package that can be read by an operating system (Windows, Mac or Linux). You could call it an application. Something stand-alone that a computer can run. This means that if you make a build of your code for Windows, you can send it to all your friends who have a Windows PC and they will be able to open and run it without having the IDE installed. Yay, finally people see your beautiful application!",
          "Unfortunately, your Mac friends will be left out… Since Windows builds don’t work on Mac and vice versa (try downloading software from another operating system to your PC, you won’t be able to install it)."
        ],
        asset: "../../assets/gifs/component3/lesson64/1.3"
      },
      {
        id: 27,
        done: 0,
        lessonID: 64,
        text: [
          "You could would compare the process of making a build to the creation of a movie. At first, there is only the script, which is the source code. When opening the script, it is just a bunch of lines of text. You can see what will happen in the story, but you have to imagine it yourself.",
          "Once the movie is produced, a build is made of the script, which turns it into object code. We can display it on the screen and see the movie running in front of our eyes. Much more user friendly than reading through an entire script and having to imagine what it would look like, right?"
        ],
        asset: "../../assets/gifs/component3/lesson64/1.4"
      },
  
    //TESTLESSON
      {
        id: 28,
        done: 0,
        text: [
          "TESTtest TESTtest TESTtest TESTtest TESTtest TESTtest TESTtest TESTtest TESTtest TESTtest TESTtest TESTtest ",
          "TESTtest TESTtest TESTtest TESTtest TESTtest TESTtest TESTtest TESTtest TESTtest TESTtest "
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




  constructor() { }
  percDone;
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


  setComp(row){
    this.components[row.id] = 100
  }
  setTopic(row){
    this.topics[row.id] = 100;
    
  }
  setLessons(row){
  }
  setPages(row){
    this.pages[row.id].done = 100;
    this.setLessons(row);
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

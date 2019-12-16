import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNetworkComponent } from './body/my-network/my-network.component';
import { MyPathComponent } from './body/my-path/my-path.component';
import { BodyComponent } from './body/body.component';
import { ComponentComponent } from './body/my-path/component/component.component';
import { TopicComponent } from './body/my-path/component/topic/topic.component';
import { LessonComponent } from './body/my-path/component/topic/lesson/lesson.component';
import { QuizComponent } from './body/my-path/component/topic/quiz/quiz.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './head/navigation/navigation.component';
import { HeadComponent } from './head/head.component';
import { PageComponent } from './body/my-path/component/topic/lesson/page/page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientModule } from '@angular/common/http';

import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { GetDataService } from './services/get-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MyNetworkComponent,
    MyPathComponent,
    BodyComponent,
    ComponentComponent,
    TopicComponent,
    LessonComponent,
    QuizComponent,
    FooterComponent,
    NavigationComponent,
    HeadComponent,
    PageComponent,
  ],
  imports: [
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

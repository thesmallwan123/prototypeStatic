import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  components: Object;
  topics: Object;
  constructor(private http: HttpClient) { }

  getComp() {
    this.http.get('http://localhost:4201/graphql?query={components{id,title,description}}')
    .pipe(map(i => i)) // <------
    .subscribe(
      i => this.components = i,
      error => console.log(error)
      );
    this.components[0];
    console.log(this.components)
    // return this.components;
  }
  
  getTopic() {
    this.http.get('http://localhost:4201/graphql?query={topics{id,title}}')
    .pipe(map(i => i)) // <------
    .subscribe(
      i => this.topics = i,
      error => console.log(error)
      );
    this.topics[0];
    console.log(this.topics)
    // return this.topics;
  }

  
}

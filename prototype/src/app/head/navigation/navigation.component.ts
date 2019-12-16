import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(
  ) { }
  side = 'L';
  currentRoute = window.location.pathname;

  ngOnInit() {
    this.toggle(this.currentRoute);
    this.addClass(this.side);
  }


  addClass(side) {
    if (side === 'L') {
      const side1 = document.getElementById(side);
      const side2 = document.getElementById('R');
      side1.classList.add('activeRoute');
      side2.classList.remove('activeRoute');

    } else {
      const side1 = document.getElementById(side);
      const side2 = document.getElementById('L');
      side1.classList.add('activeRoute');
      side2.classList.remove('activeRoute');


    }
  }
  toggle(route) {
    if (route.includes('/myNetwork')) {
      this.side = 'R';
    }
    if (route.includes('/myPath')) {
      this.side = 'L';
    }
  }
}


import { Component, OnInit } from '@angular/core';
declare var $;
declare var SmoothScroll;
declare var MenuSpy;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  scroll;



  ngOnInit() {
    this.initSmoothScroll();
    this.initNavActiveScroll();
  }

  initSmoothScroll() {
    this.scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      speedAsDuration: true
    });
  }

  initNavActiveScroll() {

    var elm = document.querySelector('#main-header');
    var ms = new MenuSpy(elm, {
      // amount of space between your menu and the next section to be activated.
      threshold     : 40,
    });
  }
}

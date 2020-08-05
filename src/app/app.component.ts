import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
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

  public spinBdColor = "#546E7A";
  public spinSize = "medium";
  public spinColor = "#dc3802";
  public spinType = "square-jelly-box";
  public spinFullScreen = "fullScreen";

  public whatsappPhone = "1123896955";
  public whatsappMessage = "Hola!%20Quiero%20consultar%20por%20un%20producto.";

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 1000);
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
      threshold: 40,
    });
  }
}

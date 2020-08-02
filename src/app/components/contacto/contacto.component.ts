import { Component, OnInit } from '@angular/core';
import { faMapMarkedAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  faMapMarkedAlt = faMapMarkedAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit() {
  }

}

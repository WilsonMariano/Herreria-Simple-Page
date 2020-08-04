import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faMapMarkedAlt, faPhoneAlt, faEnvelope, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../services/http.service';
declare var swal;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  // Iconos
  public faMapMarkedAlt = faMapMarkedAlt;
  public faPhoneAlt = faPhoneAlt;
  public faEnvelope = faEnvelope;
  public faSpinner = faSpinner;
  
  // Formulario
  public forma = new FormGroup({
    'nombre': new FormControl('Mariano', Validators.required),
    'telefono': new FormControl('123456789', Validators.required),
    'email': new FormControl('asda@sdsa', [Validators.required, Validators.email]),
    'consulta': new FormControl('asdas', Validators.required)
  });

  public loading = false;



  constructor(private _http: HttpService) { }

  ngOnInit() {
  }

  public sendMessage() {

    if(this.forma.valid) {
      this.loading = true;

      console.log(this.forma);
      this._http.sendMessage(this.forma.value)
        .subscribe(
          data => {
            setTimeout(() => this.loading = false, 500);
            swal("¡Mensaje enviado!", "Gracias por dejarnos tu mensaje, a la brevedad te estaremos contactando", "success");
          },
          err => {
            setTimeout(() => this.loading = false, 500);
            swal("¡Aviso importante!", "Ha ocurrido un error al enviar el mensaje, intente de nuevo más tarde.", "error");
          }
      );
    }
  }

}

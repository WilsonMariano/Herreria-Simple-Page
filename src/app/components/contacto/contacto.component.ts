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
    'nombre': new FormControl('', Validators.required),
    'telefono': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'consulta': new FormControl('', Validators.required)
  });

  public loading = false;



  constructor(private _http: HttpService) { }

  ngOnInit() {
  }

  public sendMessage() {

    if(this.forma.valid) {
      this.loading = true;

      this._http.sendMessage(this.forma.value)
        .subscribe(
          data => {
            setTimeout(() => {
              this.loading = false;
              swal("¡Mensaje enviado!", "Gracias por dejarnos tu mensaje, a la brevedad te estaremos contactando", "success");
              this.forma.reset();
            }, 500);
          },
          err => {
            setTimeout(() => {
              this.loading = false, 500;
              swal("¡Aviso importante!", "Ha ocurrido un error al enviar el mensaje, intente de nuevo más tarde.", "error");
            });
          }
      );
    }
  }

}

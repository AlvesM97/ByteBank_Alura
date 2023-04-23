import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number | undefined;
  destino: number | undefined;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    if (this.valor != undefined && this.destino != undefined)
      this.service.adicionar(valorEmitir).subscribe(
        (resultado) => {
          this.router.navigateByUrl('extrato');
        },
        (error) => console.log(error)
      );
  }
}

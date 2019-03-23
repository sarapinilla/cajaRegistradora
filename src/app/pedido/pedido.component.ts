import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto.model'

@Component({
  selector: 'pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

	@Input() listaPedido: Producto[]

  constructor() { }

  ngOnInit() {
  }

}

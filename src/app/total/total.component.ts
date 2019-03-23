import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

	@Input() precioTotal: number

  constructor() { }

  ngOnInit() {
  }

}

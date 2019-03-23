import { Component } from '@angular/core';
import { Producto } from './models/producto.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 	
 	arrProdComida: Producto[]
 	arrProdBebida: Producto[]

 	pedido: Producto[]
 	total: number

 	constructor(){
 		this.arrProdComida = [
			 new Producto('Spaghetti con carne', 9, 'https://lamafia.es/wp-content/uploads/2017/10/MAFIA_BLANCO_MEATBALLS.jpg'),
			 new Producto('Hummus con pan de pita', 8, 'https://static01.nyt.com/images/2015/10/07/dining/07HUMMUS/07HUMMUS-articleLarge-v2.jpg'),
			 new Producto('Ensalada de atún', 6, 'https://cdn2.cocinadelirante.com/sites/default/files/images/2016/12/ensaladaatun.jpg'),
			 new Producto('Crema de calabacín', 8, 'https://recetaslight.adelgazar.net/wp-content/uploads/crema-de-calabacin.jpg'),
			 new Producto('Salmorejo cordobés', 6, 'http://www.tiaalia.com/wp-content/uploads/2017/07/salmorejo2B2.jpg'),
			 new Producto('Pollo asado con patatas', 11, 'http://madeleinecocina.com/wp-content/uploads/2012/10/18-3.jpg'),
			 new Producto('Pisto manchego', 10, 'https://www.196flavors.com/wp-content/uploads/2018/09/pisto-manchego-1-FP.jpg'),
			 new Producto('Empanadas argentinas', 9, 'https://recetas-rapidas.es/wp-content/uploads/2018/10/empanadas-argentinas-receta-comida.jpg'),
			 new Producto('Ceviche de gambas', 12, 'http://www.unapizca.com/wp-content/uploads/2015/06/DSC0234.jpg'),
			 new Producto('Parmiggiana', 11, 'http://static1.squarespace.com/static/542d948de4b0c8590fff218b/t/55a7d8dfe4b0afd714d9d433/1437063393768/')
  		]
 		this.arrProdBebida = [
			 new Producto('Refresco', 2, 'https://s.libertaddigital.com/fotos/noticias/1920/1080/fit/refrescos.jpg'),
			 new Producto('Agua', 1, 'https://solandecabras.es/wp-content/uploads/2017/06/Foto-producto_familia-PET-1.jpg'),
			 new Producto('Vino', 2, 'http://noticias.winetoyou.es/wp-content/uploads/2013/09/tipos-de-copas-para-vino.jpg'),
			 new Producto('Tercio de cerveza', 2, 'https://media.timeout.com/images/104028707/630/472/image.jpg'),
			 new Producto('Caña de cerveza', 1, 'https://static.plenummedia.com/35158/images/20170330134034-0102567-vaso-cerveza-cana-0,24-litros-02-web.jpg?dh=NDcweDQ1MA%3D%3D&m=resize')
			 
 		]

 		this.pedido = []
 		this.total = 0
 	}

 	agregarPedido($event){
 		this.pedido.push($event)
 		this.total += parseInt($event.precio)
 	}
}

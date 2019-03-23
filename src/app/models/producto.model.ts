export class Producto{

	nombre: string
	precio: number
	imagen: string //por ruta

	constructor(pNombre: string, pPrecio: number, pImagen: string){
		this.nombre = pNombre
		this.precio = pPrecio
		this.imagen = pImagen
	}
}
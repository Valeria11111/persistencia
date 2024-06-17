import fs from 'node:fs'

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];

let precioString= precios.toString()
let productoString= productos.toString()

fs.writeFileSync('precios.txt',precioString)
console.log('precio guardado con exito!')

let precio=fs.readFileSync("./precios.txt", "utf8");
let dato= precio.trim().split("\n")
console.log(dato);


fs.writeFileSync('productos.txt',productoString)
console.log('producto guardado con exito!')

let producto=fs.readFileSync("./productos.txt", "utf8");
let dato2= producto.trim().split("\n")
console.log(dato2);


/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

interface Polygon {
  getArea(): number
  printArea(): void
}

class Triangle implements Polygon {
  heigh: number
  base: number
  constructor(heigh: number, base: number) {
    this.heigh = heigh
    this.base = base
  }
  getArea() {
    return (this.base * this.heigh) / 2
  }
  printArea() {
    console.log(`El area del triangulo es ${this.getArea}`)
  }
}

class Square implements Polygon {
  side: number
  constructor(side:number) {
    this.side = side
  }
  getArea(): number {
    return this.side * this.side
  }
  printArea() {
    console.log(`El area del cuadrado es ${this.getArea}`)
  }
}

class Rectangle implements Polygon {
  length: number
  width: number
  constructor(width: number, length: number) {
    this.width = width 
    this.length = length
  }
  getArea(): number {
    return this.width * this.length
  }
  printArea() {
    console.log(`El area del rectangulo es ${this.getArea}`)
  }
}

function area(pol: Polygon) {
  pol.printArea()
  return pol.getArea()
}

const triangle = new Triangle(10, 5)
const square = new Square(5)
const rectangle = new Rectangle(5, 10)

console.log(triangle.getArea())
console.log(square.getArea())
console.log(rectangle.getArea())
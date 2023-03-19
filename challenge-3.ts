/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function esPrimo (n: number) {
  let result = true
  const squareRoot = Math.floor(Math.sqrt(n))
  for (let i = 2; i <= squareRoot; i++) {
    if (n % i === 0) {
      result = false
      break
    } 
  }
  return result
}

function primosEntre1y100 () {
  for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) console.log(`El numero ${i} es primo`)
    else console.log(`El numero ${i} no es primo`)
  }
}

primosEntre1y100()
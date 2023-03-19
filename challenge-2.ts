/*
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Fecha publicación enunciado: 10/01/22
 * Fecha publicación resolución: 17/01/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function Fibonacci () {
  let last2 = 0
  console.log(0)
  let last1 = 1
  for( let i = 0; i < 50; i++) {
    const now = last2 + last1 
    last2 = last1
    last1 = now
    console.log(last1)
  }
}

function Fibonacci_recursive_noMap(n: number) {
  if (n <= 1) return n
  return Fibonacci_recursive_noMap(n -1) + Fibonacci_recursive_noMap(n-2)
}

function Fibonacci_recursive(n: number, map: Map<number, number> | null) {
  if (map === null) map = new Map<number, number>()
  let result: number
  if (map.has(n)) result = map.get(n)!
  else if (n <= 1) result = n
  else {
    result = Fibonacci_recursive(n-1, map) + Fibonacci_recursive(n-2, map)
    map.set(n, result)
  }
  return result
}



const result_Fibonacci = Fibonacci_recursive(50, null)
Fibonacci()
console.log('--------------------------')
console.log(result_Fibonacci)
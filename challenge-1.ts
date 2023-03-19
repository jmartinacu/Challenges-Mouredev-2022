/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function main1_1 (firstWord: string, secondWord: string) : boolean {
  let result: boolean = true
  if (firstWord === secondWord) return false
  for (const character of firstWord) {
    if (character === ' ') continue
    else if (!secondWord.includes(character)) {
      result = false
      break
    }
  }
  return result
}

function main1_2 (firstWord: string, secondWord: string) {
  if (firstWord === secondWord) return false
  const firstArray = [...firstWord].sort()
  const secondArray = [...secondWord].sort()
  return JSON.stringify(firstArray) === JSON.stringify(secondArray)
}

const firstWord = 'roma'
const secondWord = 'amor'

const result_Anagram = main1_2(firstWord, secondWord)

if (result_Anagram === true) console.log(`Las palabras ${firstWord} y ${secondWord} son anagramas`)
else console.log(`Las palabras ${firstWord} y ${secondWord} no son anagramas`)


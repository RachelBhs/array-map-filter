/* Array.prototype.map - Exercice 5

Ecrire une fonction multiplyOddIndices, qui prend en entrée un tableau de nombres.
* Chaque nombre situé à un index pair doit être renvoyé tel quel
* Chaque nombre situé à un index impair doit être renvoyé multiplié par son index

Il va donc falloir utiliser le 2ème argument de la fonction passée à map.

Exemple de tableau d'entrée:
  [3, 8, 11, 13, 19, 7]
Tableau renvoyé par multiplyOddIndices:
  [3, 8, 11, 39, 19, 35]
*/

const numbers = [3, 8, 11, 13, 19, 7];

function multiplyOddIndices(numbers) {
  return numbers.map(function(number){
    if (numbers.indexOf(number) % 2 == 1){
      return number * numbers.indexOf(number);
    } else {
      return number;
    }
  })
}

console.log(multiplyOddIndices(numbers));

module.exports = multiplyOddIndices;
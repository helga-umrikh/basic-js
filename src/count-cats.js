const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  if (arr.length === 0) {return 0};
  let arrFlat = arr.flat();
  let symbolCat = /(?<!\s)\^\^(?!\s)/; 
  
  let catCounts = 0;
  for(let i = 0; i!= arrFlat.length; i++){
    if(symbolCat.test(arrFlat[i])) {
      catCounts = catCounts + 1;
    }
  }
  return catCounts;
  
}
module.exports = {
  countCats
};
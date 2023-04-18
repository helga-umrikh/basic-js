const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = members;
  let result = [];
  if(Array.isArray(arr) !== true) {return false};
  for(let i = 0; i != arr.length; i++) {
    if(typeof arr[i] === "string") {
      let word = arr[i];
      if(word.includes('.')) {continue};
      word = word.replace(/[,\s/_/]+/g, '' )
      result.push(word[0].toUpperCase());
    }
  }
  result = result.flat();
  result = result.sort();
  result = result.join('');
  return result;
}

module.exports = {
  createDreamTeam
};

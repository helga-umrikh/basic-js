const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
  if(typeof sampleActivity !== 'string') {return false};
  if(sampleActivity.length === 0) {return false};
  let regex = /^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/;
  if(regex.test(sampleActivity) === false) {return false};

  let argNum = Number(sampleActivity)
  if(argNum > MODERN_ACTIVITY) {return false};
  if(argNum <= 0) {return false};


  let a = MODERN_ACTIVITY / argNum;
  let b = Math.log(a) * HALF_LIFE_PERIOD;
  let c = b / Math.log(2);

  let result = Math.ceil(c);
  return result;
}

module.exports = {
  dateSample
};

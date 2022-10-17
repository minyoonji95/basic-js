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
function dateSample(sampleActivity) {
  let numberSampleActivity = Number(sampleActivity);
  const lnTwo = 0.693;
  if (typeof numberSampleActivity === 'number' && numberSampleActivity > 0 && numberSampleActivity < 15) {
    const radioactiveDecayConstant = lnTwo / HALF_LIFE_PERIOD
    let sampleAge = Math.ceil(Math.log(MODERN_ACTIVITY / numberSampleActivity) / radioactiveDecayConstant)
return sampleAge;
  }
  else {
    return false;
  }
  // throw new NotImplementedError('Not implemented');

  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
// dateSample('');
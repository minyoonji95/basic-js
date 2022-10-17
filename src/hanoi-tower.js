const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  if (disksNumber === 0){
return false;
  } 
    let turns = Math.pow(2, disksNumber) - 1;
    let hourInSeconds = 3600;
    let turn = hourInSeconds/turnsSpeed;
let seconds = Math.floor(turns*turn);

  let game = {
    turns: turns,
    seconds: seconds
  }
  
 return game;

  
  
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
    calculateHanoi
  };
  
// calculateHanoi(5, 4074);
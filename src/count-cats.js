const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
//  * @param {Array<Array>} matrix 
//  * @return {Number} count of cats found
//  *
//  * @example
//  * countCats([
//  *  [0, 1, '^^'],
//  *  [0, '^^', 2],
//  *  ['^^', 1, 2]
//  * ]) => 3`
//  *
//  */


function countCats(backyards) {
let cats = [];
let cat = '^^'
backyards.forEach(arr => {
 arr.forEach(el => {
if (el === cat) {
  cats.push(el);
}
}); 
});
return cats.length;
}

module.exports = {
  countCats
};


// countCats([[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2]]);


  // throw new NotImplementedError('Not implemented');

  // remove line with error and write your code here

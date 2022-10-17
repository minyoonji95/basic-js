const {
  NotImplementedError
} = require('../extensions/index.js');

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
 *
 */
function createDreamTeam(members) {
  if (members === undefined) {
    return false;
  }
  let dreamTeam = [];
  let sortedTeam = '';
  members.forEach(member => {
    if (typeof member === 'string') {
      let strMember = member.toUpperCase().trim();
      let firstLetter = strMember[0];
      dreamTeam.push(firstLetter);
      sortedTeam = dreamTeam.sort().join('');
    } else {
      return false;
    }
  });
  return sortedTeam;
}


module.exports = {
  createDreamTeam
};


// throw new NotImplementedError('Not implemented');

// remove line with error and write your code here
// }
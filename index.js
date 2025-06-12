require('datejs');

function combineUsers(...users){
  let combinedObject = {
    users: []
  };
  users.forEach(score => combinedObject.users.push(...score));
  combinedObject.merge_date = Date.today().toString("M/d/yyyy")
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
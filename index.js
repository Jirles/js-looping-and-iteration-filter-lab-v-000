// Code your solution in this file
function findMatching(collection, name){
  const lowerCaseName = name.toLowerCase();
  return collection.filter(driver => driver === name || driver === lowerCaseName);
};

function fuzzyMatch(collection, letters){
  const
};

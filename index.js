// Code your solution in this file
function findMatching(collection, name) {
  const lowerCaseName = name.toLowerCase();
  return collection.filter(driver => driver === name || driver === lowerCaseName);
};

function fuzzyMatch(collection, letters){
  return collection.filter(driver => driver.slice(0, letters.length) === letters);
};

function matchName(collection, name) {
  const result = [];
  for (const driver of collection){
    ? result.push(driver.name) : continue;
  };
  return result;
};

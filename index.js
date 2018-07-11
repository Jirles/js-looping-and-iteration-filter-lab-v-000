// Code your solution in this file
function findMatching(collection, name){
  const newCollection = [];
  const newName = name.toLowerCase();
  for (const name of collection) {
    newCollection.push(name.toLowerCase())
  };
  return newCollection.filter(function(newName) { name => name === newName  })
};

// Code your solution in this file
function findMatching(collection, name){
  const newName = name[0].toUpperCase() + name.slice(1)

  return collection.filter(name => name === newName );
};

// Code your solution in this file
function findMatching(collection, name){
  const capitalizedName = name[0].toUpperCase() + name.slice(1)
  const lowerCaseName = name.toLowerCase()

  return collection.filter(name => name === capitalizedName || name ===lowerCaseName );
};

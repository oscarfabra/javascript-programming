// The global variable
var globalTitle = "Winter Is Coming";

// Transforms a title into a url slug
function urlSlug(title) {
  return title.split(/\s+/)
    .filter(word => word != '')
    .map(word => word.toLowerCase())
    .join("-");
}

console.log(urlSlug(globalTitle));
console.log(globalTitle);
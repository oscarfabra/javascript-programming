// const CTAELEMENT = document.querySelector(".cta a");

// if(CTAELEMENT.hasAttribute("target")) {
//   console.log(CTAELEMENT.getAttribute("target"));
// } else {
//   CTAELEMENT.setAttribute("target", "_blank");
// }

// console.log(CTAELEMENT.attributes);

// 0. Gets alt text
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");
var altText = THEIMAGE.getAttribute("alt");
// 1. Creates figcaption element
var captionElement = document.createElement("figcaption");
// // 2. Creates text node with alt text
// var captionText = document.createTextNode(altText);
// // 3. Inserts text node inside figcaption element
// captionElement.appendChild(captionText);
// // 4. Inserts figcaption element inside featured-image
// FEATURED.appendChild(captionElement);

// Simpler method for newer browsers
captionElement.append(altText);
FEATURED.append(captionElement);

THEIMAGE.setAttribute("alt", "");

console.log(captionElement);
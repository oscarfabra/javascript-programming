function sentensify(str) {
  return str.split(/[-.,]/).join(" ");
}
console.log(sentensify("May-the-force-be-with-you"));

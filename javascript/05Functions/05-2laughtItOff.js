function laugh(num) {
  var phrase = "";
  for (var i = 0; i < num; i++) {
    phrase = phrase + "ha";
  }
  return phrase + "!";
}
console.log(laugh(6));

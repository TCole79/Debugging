
var input = process.argv[2]; 

  if (input) {
    console.log(reverse(input));
  }
function reverse(original) {
  return original.split('').reverse().join('');
}
// review the methods online

/*
const args = process.argv.splice(2);
const reversed = function (arr) {
  let rev = "";
    for (let word of arr) {
    for (let i = word.length - 1; i >= 0; i--) {
      rev += word[i];
    }
    console.log(rev);
    rev = "";
  }
};
reversed(args);
*/
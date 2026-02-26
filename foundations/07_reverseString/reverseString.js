const reverseString = function(string) {
  final = ""
  for (let i = string.length; i > -1; i--) {
    final += string.charAt(i)
  }
    // return string.charAt(string.length-2)
    return final
};


// return string.charAt(string.length-1)

// Do not edit below this line
module.exports = reverseString;

//   if (times < 0) return "ERROR";
//   let string = "";
//   for (let i = 0; i < times; i++) {
//     string += word;
//   }
//   return string;
var reg = /[a-z]/gi
var reg2 = new RegExp(/a-z/,'gi')           // these are the two ways of writing RegEx ! line 1 and 2 give the same output

const patterns = {
  // telephone: /^[0-9]{11}$/,
  telephone: /^\d{11}$/,
}
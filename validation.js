var reg = /[a-z]/gi
var reg2 = new RegExp(/a-z/,'gi')           // these are the two ways of writing RegEx ! line 1 and 2 give the same output

const patterns = {
  // telephone: /^[0-9]{11}$/,
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  slug:/^[a-z\d-]{8,20}$/,
};

const inputs = document.querySelectorAll('input');

function validate(field, regex){
  if(regex.test(field.value)){
    field.className = 'valid'
  }else{
    field.className = 'invalid'
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    console.log('===>> e.target.attributes.name.value', e.target.attributes.name.value)
    validate(e.target, patterns[e.target.attributes.name.value])
  })
});
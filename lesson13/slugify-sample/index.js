var slugify = require('slugify')

var result1 = slugify('some  string')
console.log(result1)
var result2 = slugify('some  string','**')
console.log(result2)
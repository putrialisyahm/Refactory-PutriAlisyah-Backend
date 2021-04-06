// ## 8. Masking

// Given a string "23dn3ir30fd2eddd", please change all the characters with * (asterisk) except last 3 characters. Write a function to solve this.

// Example :
// 

// const secret_text = "23dn3ir30fd2eddd"
// masking(secret_text)

var dd = '23dn3ir30fd2eddd';
var replaced = dd.replace(/.(?=.{3,}$)/g, '*');
console.log(replaced);


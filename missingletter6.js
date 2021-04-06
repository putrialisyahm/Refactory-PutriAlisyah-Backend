// ```markdown
// ## 6. Missing Letter

// If there is a list of ordered letters, and one of them is missing. Find out the missing letter!

// Example :

// ```javascript
// const list_letters_first = ["c","d","e","g","h"]
// const list_letters_second = ["X","Z"]
// ```

// Expected output :

// ```
// list_letters_first = f
// list_letters_second = Y
// ```
// ```

function fearNotLetter( str ) {
    var ch0 = str.charCodeAt(0), ch;
    str.split("").every(function(v, i){
      ch = String.fromCharCode(ch0 + i);
      return ch === v;
    });
    return ch === str[str.length-1] ? undefined : ch;
  }
  
  
  console.log( fearNotLetter("c, d, e, g, h") ); // f
  console.log( fearNotLetter("xz") ); //y
// ## 4. Play with numbers

// Create row of numbers from **0 to 1000**. Then **group that numbers** by:

// 1) even, 
// 2) odd, 
// 3) numbers multiplies by 5,
// 4) prime numbers, and
// 5) prime numbers less than 100.

// even and odd
function partA() {
    for (var i = 0; i < 1000; i++){
        if ((i % 2) == 0) console.log(i + ' ');
    }
    console.log(partB,1000)
}

function partB() {
    for (var i = 0; i < 1000; i++){
        if ((i % 2) !== 0) console.log(i + ' ');
    }
}
// // even
partA();

// odd
partB()

// 3. 
function partC() {
    for (var i = 0; i < 1000; i++){
        if ((i % 5) == 0) console.log(i + ' ');
    }
    console.log(1000)
}

partC()

// 4. 
function cekPrima( n ) {
    var max = Math.sqrt(n);
    for( var i = 2;  i <= max;  i++ ) {
        if( n % i == 0 )
            return false;
    }
    return true;
}

for( var n = 2;  n < 1000;  n++ ) {
        if( cekPrima(n) ) {
  console.log( n + '' );
 }
}

// 5. 
function cekPrima( n ) {
    var max = Math.sqrt(n);
    for( var i = 2;  i <= max;  i++ ) {
        if( n % i == 0 )
            return false;
    }
    return true;
}

for( var n = 2;  n < 1000;  n++ ) {
        if( cekPrima(n) ) {
  console.log( n + '' );
 }
}
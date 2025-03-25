//1. 
function printSquare(n) {
    for (let i = 0; i < n; i++) {
      console.log("* ".repeat(n).trim());
    }
  }
  
  printSquare(3);
  console.log(" ");

  //2.
  function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
      console.log("* ".repeat(i));
    }
  }
  
  printTriangle(3);
  console.log(" ");

  //3.
  function printInvertedTriangle(n) {
    for (let i = n; i > 0; i--) {
      console.log("* ".repeat(i).trim());
    }
  }
  
  printInvertedTriangle(3);
  console.log(" ");

// 4.

function printPyramid(n) {
    for (let i = 0; i < n; i++) {
      let row = "";
    
      for (let j = 0; j < n - i - 1; j++) {
        row += " ";
      }
    
      for (let k = 0; k <= i; k++) {
        row += "* ";
      }
      console.log(row);
    }
  }
  
printPyramid(3);
console.log(" ");

//5.
function printNumberPyramid(n) {
    for (let i = 1; i <= n; i++) {
      let row = "";
  
      for (let j = 0; j < n - i; j++) {
        row += " ";
      }
  
      for (let k = 0; k < i; k++) {
        row += i;
        if (k < i - 1) row += " ";
      }
  
      console.log(row);
    }
  }
  printNumberPyramid(3);
  console.log(" ");
  

//6.
function printDiamond(n) {
    for (let i = 0; i < n; i++) {
      let row = "";
  
      for (let j = 0; j < n - i - 1; j++) {
        row += " ";
      }
        for (let k = 0; k <= i; k++) {
        row += "*";
        if (k < i) row += " "; 
      }
  
      console.log(row);
    }
      for (let i = n - 2; i >= 0; i--) {
      let row = "";
  
      for (let j = 0; j < n - i - 1; j++) {
        row += " ";
      }
  
      for (let k = 0; k <= i; k++) {
        row += "*";
        if (k < i) row += " "; 
      }
  
      console.log(row);
    }
  }
  
  printDiamond(3);
  
//7.
function printPascalsTriangle(n) {
    for (let i = 0; i < n; i++) {
      let row = "";
  
      
      row += " ".repeat(n - i - 1); 
      let num = 1;
      for (let j = 0; j <= i; j++) {
        row += num + " "; 
        num = (num * (i - j)) / (j + 1);
      }
  
      console.log(row.trim()); 
    }
  }
  
  printPascalsTriangle(4);
  
//8.
function printHollowSquare(n) {
    for (let i = 0; i < n; i++) {
      if (i === 0 || i === n - 1) {
        console.log("* ".repeat(n).trim()); 
      } else {
        console.log("* " + "  ".repeat(n - 2) + "*"); 
      }
    }
  }
  
  printHollowSquare(3);
  console.log(" ");

  //9.
  function printHourglass(n) {
    for (let i = n; i > 0; i--) {
      console.log(" ".repeat(n - i) + "* ".repeat(i).trim());
    }
    for (let i = 2; i <= n; i++) {
      console.log(" ".repeat(n - i) + "* ".repeat(i).trim());
    }
  }
  
  printHourglass(4);
  
  
  
  
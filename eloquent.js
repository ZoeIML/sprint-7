//Exercise One: 
function min(a, b) {
    if (a < b)
      return a;
    else
      return b;
  }
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10

//Exercise Two:
// I didn't understand the n -2 part so I ended up with this:
function isEven(num) {
    if (num % 2 === 0)
      return true;
    else 
      return false;
  }
  
  console.log(isEven(50));
  console.log(isEven(75));

//Eventually I came to this: 
function isEven(n) {
    if (n == 0)
      return true;
    else if (n == 1)
      return false;
    else if (n < 0)
      return isEven(-n);
    else
      return isEven(n - 2);
  }

  // But I had to work backwards! 

  //Exercise Three: 
  function countChar(string, ch) {
    var finalCount = 0;
    for (var i = 0; i < string.length; i++)
      if (string.charAt(i) == ch)
        finalCount += 1;
    return finalCount;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4
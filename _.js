 // Task: 1
 const _ = {
    // Task: 2, run the task: node test/lodash.js
  
  // Task 3: Specify: Read .clamp() methode
  
  // Task 4: Ideate: add a clamp() methode
    clamp(number, lower, upper){
      // Task 5: Implement
      let lowerClampedValue = Math.max(number, lower);
      let ClampedValue = Math.min(lowerClampedValue, upper);
      
      return ClampedValue;
    },
    
    // Task 5: test the _.js with: nod test/clamp.js
    // Task 7: Specify: inRange method 
    // Task 8: Ideate: Add the .inRange() method
   // Task 9: 
    inRange(number, start, end){
     if (end === undefined){
       end = start
       start = 0
     }
     
      if (start > end){
        let temp = end
        end = start
        start = temp
      }
      let isInRange = start <= number && number < end
        return isInRange;
      // Task 10: test inRange methode.
   },
    // Task 11: Specify, start implementing
    // Task 12: Ideate the solution, add the method words(), use the split() method.
   // Task 13: implemente the words() method
    words(string){
      let words = string.split(' ');
        return words;
    }, // end of word
    // Task 14: test words method.
    
    // Task 15: method .pad() Specify (read documentatio), Task 16: Ideate (how to idealy implemente the task)
    // Task 17: pad methode
    pad(string, length){
      if(string.length >= length){return string;}
      const startPaddingLength = Math.floor((length - string.length) / 2);
      const endPaddingLength = length - string.length - startPaddingLength;
      const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
       return paddedString;
    }, // end of pad methode Task 19: test pad method
    
    
    
    
  };
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;
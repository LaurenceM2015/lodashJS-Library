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
    
    // Method 6.
    // Task 18: run node test/pad.js
      // Task 19: Specify:learn about the method
      // Task 20: Ideate: plan for implementating the has() method.
      
      // Task 21: Implementation the game plan in the code
        has(object, key){
          const hasValue = object[key];
          if(hasValue != undefined){
            return true;
          } return false;
        
      }, // Task 22: Test the has method: node test/has.js
    
    // Method 6: invert(), Task 23 Specify, Task 24 Ideate
    // Task 25: Implement the game plan code.
    invert(object){
      let invertedObject = {};
      for(let key in object){
        const originalValue = object[key]
        invertedObject = {originalValue : key}
      } return  invertedObject;
    }, // Task 26: Test invert method: node run test/invert.js
    
    // Method 7 findKey: Task 27: Specify, Task 28: Ideate
    // Task 29: Implement:
    
    findKey(object, predicate){
      for(let key in object){
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue){
          return key;
        } 
      };
      undefined 
      return undefined;
    }, // Task 30: Test the findKey method: node run test/findKey
    
    // Method 8: drop(), Task 31: Specify, Task 32: Ideate, 
    // Task 33: Implement
    
    drop(array, n){
      if(n === undefined){
        n = 1;
      } 
      let droppedArray = array.slice(n, array.length);
      return droppedArray;
      
    }, // Task 34: Test drop() method, node test/drop.js
    
    // Method 9: dropWhile(), Task 35: Specify, Task 36: Ideate, 
    // Task 37: Implement
    dropWhile(array, predicate){
      const callbackFunc = (element, index) => {
        return !predicate(element, index, array);
      };
      let dropNumber = array.findIndex(callbackFunc);
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    }, // Task 38: Test node test/drop-while.js
    
    // Method 10: chunk() Task 39: Specify, Task 40: Ideate, 
    // Task 41: Implement
    chunk(array, size){
      if(size === undefined){
        size = 1;
      }
      let arrayChunks = [];
      for (let i = 0; i < array.length; i+= size ){
        let arrayChunk = array.slice(i, i+size);
        arrayChunks.push(arrayChunk);
      } return arrayChunks
    } // Task 42: Test node test/chunk.js
   
    
  };
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;
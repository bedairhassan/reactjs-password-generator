export default function generatePassword(size) {

    var finale = "";
    var prev = 0;
    for (var i = 0; i <= size; i++) {
      
      var notincluded = 4; // 4? 0->3
  
      var random;
      while (random===prev) { // if true? continue generating new random value to avoid generating aa or 44
        random = Math.random();
        random *= notincluded;
        random = Math.floor(random);
      }
  
      // set currentrandom to previous random since it is not the same! -> 5a,A4
      prev = random;
  
      switch (random) {
        case 0:
          finale += generate("abcdefghijklmnopqrstuvwxyz");
          break;
        case 1:
          finale += generate("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
          break;
        case 2:
          finale += generate("1234567890");
          break;
        case 3:
          finale += generate("!@#$%^&*()_-+={}:;/.,`~");
          break;
      }
        
        // validation that the last pushed character does not have count 2 for example : password is a1#4%a -> a is repeated twice -> we want to avoid this

        // each push check
        var finalCharacter = finale.charAt(finale.length-1) // final character in string 
        // var count = finale.split(finalCharacter).length - 1
        
        if (Count(finale,finalCharacter) === 2) {
            
            finale = finale.substring(0, finale.length - 1); //pop final character
            i--
            
        }
    }
  
    return finale;
}

function Count(string, suspect) {
  return string.split(suspect).length-1
}
  
function generate(array) {
    var random = Math.random();
    random *= array.length;
    random = Math.floor(random);
  
    return array.charAt(random);
}


// exports.generatePassword = function (size) {
    
//     return generatePassword(size)
// }
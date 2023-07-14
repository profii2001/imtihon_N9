function caesarCipher(text, key) {
    var result = "";
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for (var i = 0; i < text.length; i++) {
      var char = text[i].toUpperCase();
      if (alphabet.includes(char)) {
        var index = alphabet.indexOf(char);
        var newIndex = (index + key) % 26;
        var newChar = alphabet[newIndex];
        result += newChar;
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  var str = "Hello, World!";
  var key = 5;
  
  var n = caesarCipher(str, key);
  console.log(n);
  
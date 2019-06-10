function add(string) {
    let result = 0;


    if (string == "") {
        return 0;
    }

    var delim = /^(\/\/.*\n)/;
    var delimiters = /[//*//%;\n,]/;
    let replace = string.replace(delim, '');
    let split = replace.split(delimiters);

    for (let i = 0; i < split.length; i++) {
        if(split[i] == "") {
            split.splice(i, 1);
            i--;
        }
    }
    
    for (k = 0; k < split.length; k++) {
  
      let sum = parseInt(split[k]);
  
      if (sum < 0) {
        throw new Error("negatives are not allowed, ") + split[k];
      }
      if (sum > 1000) {
          sum -= sum;
      }
      result += sum;
    }
    return result;
  }

  module.exports = {
      add:add
 }

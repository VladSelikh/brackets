module.exports = function check(str, bracketsConfig) {

  let arrOpen = [];
  let arrClose = [];
  let stack = []; //variable to store open brackets

  for (let i = 0; i < bracketsConfig.length; i++) {
    arrOpen.push(bracketsConfig[i][0]);
    arrClose.push(bracketsConfig[i][1]);
  }

  let current;

  for (let m = 0; m < str.length; m++) {

    current = str[m]; //easier than writing it over and over

    if (arrOpen.indexOf(current) > -1 && arrOpen.indexOf(current) === arrClose.indexOf(current) && stack.indexOf(current) === -1) {
      
      stack.push(current);

    } else if (arrOpen.indexOf(current) > -1 && arrOpen.indexOf(current) === arrClose.indexOf(current) && stack.indexOf(current) !== -1) {

      const LastBracket = arrOpen.indexOf(stack.pop());

      if (arrClose[LastBracket] !== current) { //if the stack is empty, .pop() returns undefined, so this expression is still correct

        return false; //if the last open bracket added to the stack doesn't correspont to the current closing bracket, configuration is incorrect
      }
    } else if (arrOpen.indexOf(current) > -1 && arrOpen.indexOf(current) !== arrClose.indexOf(current)) {
      
      stack.push(current);

    } else {

      const LastBracket = arrOpen.indexOf(stack.pop());

      if (arrClose[LastBracket] !== current) { //if the stack is empty, .pop() returns undefined, so this expression is still correct

        return false; //see line 27
      }
    }
  }

  return stack.length === 0; //any elements mean brackets left open
}
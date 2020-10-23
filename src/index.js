module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 1)
  return false;
  let arrOpen = [];
  let arrClose = [];
  let stack = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
        arrOpen.push(bracketsConfig[i][0]);
        arrClose.push(bracketsConfig[i][1]);
      }
      let counter = [];
      let current;
  for (let m = 0; m < str.length; m++) {
        current = str[m]; //easier than writing it over and over
        if (arrOpen.indexOf(current) > -1 && arrOpen.indexOf(current) === arrClose.indexOf(current) && counter.indexOf(current) === -1) {
          stack.push(current);
          counter.push(current);
        } else if (arrOpen.indexOf(current) > -1 && arrOpen.indexOf(current) === arrClose.indexOf(current) && counter.indexOf(current) !== -1) {
          const LastBracket = arrOpen.indexOf(stack.pop());
          counter.pop();
          if (arrClose[LastBracket] !== current) { //if the stack is empty, .pop() returns undefined, so this expression is still correct
          
            return false; //terminate immediately - no need to continue scanning the string
          }
        }
          else if (arrOpen.indexOf(current) > -1 && arrOpen.indexOf(current) !== arrClose.indexOf(current)) {
            stack.push(current);
        }
        else {
          const LastBracket = arrOpen.indexOf(stack.pop());
          
          if (arrClose[LastBracket] !== current) { //if the stack is empty, .pop() returns undefined, so this expression is still correct
          
            return false; //terminate immediately - no need to continue scanning the string
          }
        }
      }
      
      return stack.length === 0; //any elements mean brackets left open
}
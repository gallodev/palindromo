/* eslint-disable no-console */
export default class PalindromeService {
  isValid = (text: string): boolean => { 
    // eslint-disable-next-line no-useless-escape
    const pattern = /[^\w\s\!']/gi;
    const curVal = text.toLowerCase().replace(pattern,"");       
    const reverseVal = [...curVal].reverse().join("");    

    
    if(curVal === reverseVal) {
      console.log(`A palavra ${text} é um palíndromo!`);
      return true;
    } else {
      console.log(`A palavra ${text} não é um palíndromo!`);
      return false;
    }
  }
 
}
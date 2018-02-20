module.exports = function getZerosCount(number) {
 let five = 5;
 let result = 0;
 while(Math.floor(number/five) >= 1){
   result = result + Math.floor(number/five);
   five = five * 5;
 }
 return result;
}

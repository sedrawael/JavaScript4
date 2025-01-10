/*task1*/
function findSmallest(smalllest){
    return Math.min(...smalllest)
  }
  document.write(findSmallest([30, 45, 60, 7]))
  
  document.write("<br>");
  /*task2*/
  function AlphabeticalOrder(str){
    return str . split ('').sort().join('');
  }
  document.write(AlphabeticalOrder('hello'))

  document.write("<br>")


    /*task4*/
    function  oddOrEven(number) {
        if (number% 2=== 0){
            return "Even";
        }

         else {
            return "odd"
         }
    }
    document.write(oddOrEven(9))

    document.write("<br>")



    function evenNum(number1){
 return number1. filter(num => num % 2===0);
    }
    document.write(evenNum([1, 2, 3, 4, 5, 6,7,8,9]))

document.write("<br>")


  /*task5*/

  function getAbsSum(arr) {
    return arr
      .map(num => Math.abs(num))  
      .reduce((sum, num) => sum + num, 0);
  }
  
  document.write(getAbsSum([-1, -3, -5, -4, -10, 0]))

  document.write("<br>")

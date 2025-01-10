    /*task6*/

    function factoralofn(n){
        let res = 1 
        for (let i = 1 ;i <= n ; i++){
            res = res * i ; 
        }
        document.write(res )
    }
  
    factoralofn(8);
    document.write("<br>")


       /*task6*/
       function numbersOnly(arr){
        return arr.filter( arr=> typeof arr !== 'string')
       }
        document.write(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding'])); 
       document.write("<br>")
/*task7*/

function addUp ( n){
    let sum = 0 ; 
    for (let i = n; i >= 0; i--) {
        sum += i;
    }
    return sum;
} 
document.write(addUp(8));


document.write("<br>")


/*task8*/
function  minMaxLengthAverage (arr1){
    let min = Math.min (...arr1);
let max = Math.max(...arr1);
let length = arr1.length;
let average = arr1.reduce((sum , num) => sum + num , 0 )/length;
return [min, max, length, average];
}
document.write(minMaxLengthAverage([7, 13, 3, 77, 100]));
document.write("<br>")

/*task9*/
function romanNumbers(num) {
    const romanValues = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let roman = '';
    for (let key in romanValues) {
        while (num >= romanValues[key]) {
            roman += key;
            num -= romanValues[key];
        }
    }
    return roman;
}
document.write(romanNumbers(1989)); 


document.write("<br>")
/*task10*/

function ountWords (str){
    return str.trim().split(/\s+/).length;
}
document.write(ountWords('hello from CodingAcademy!')); 
document.write("<br>")
/*task11*/
function MultiplyByLength(arr4){
    const length = arr4.length;
    return arr4.map(num => num * length);
}
document.write(MultiplyByLength([4, 2, 5]));
document.write("<br>")





/*task12*/
function checkEnding(str1,str2){
    return str1.endsWith(str2);
}
document.write(checkEnding("CodingSchool", "Ac"));




document.write("<br>")


/*task13*/

function doubleChar(str6) {
    return str6.split('').map(char => char + char).join('');}

document.write(doubleChar("Coding"));
document.write("<br>")






function createPhoneNumber(numbers){
   // var tel = document.getElementById('numbers').value;
    // if(!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(numbers)){
    // alert('固定电话有误，请重填');
     // return false;
     // }
    //字符串 （123） 456-7890 numbers【0】
    //字符串拼接
     //return  '(' + numbers[0] + numbers[1] + numbers[2] + ')'+' ' + numbers[3] + numbers[4] + numbers[5]+'-'+numbers[6]+numbers[7]+numbers[8] + numbers[9];
//     return ({numbers[0]}$


        // var number =''
        // for(var i=0; i<2;i++){
        //     var number1 = '(';
        //     number1 += numbers[i];
        // }
        // for(var j=2; j<5;j++){
        //     var number2 = ') ';
        //     number2 += numbers[i];    
        // }
        // for(var p=5; p<9;p++){
        //     var number3 = '-'
        //     number3 += numbers[i];
        // }
        // return number1+ number2 + number3;


            return [1,2,3,4,5,6,7,8,9,0].join('')
    }
 // (123) 456-789
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

let name = 'zzz'
let word = `hello,${name}.`
console.log(word); 
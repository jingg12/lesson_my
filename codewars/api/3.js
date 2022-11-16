// var str = 'how are you doing today';
// var arr = [];
// console.log(str.split(' '),str);
// for(var i = 0; i < str.length; i++){
//     if(str.split(' '),str[i].length>=str.split(' '),str[i+1].length)
//     str.split(' '),str[i]=arr[ ];
// }
var str="How are you doing today";
console.log(Math.min(...str.split(" ").map(item => item.length)))
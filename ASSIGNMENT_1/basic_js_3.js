var str=["1.3","2.5","3.6"];
console.log(str);
var str1=new Array(3);
function StoI(str){
  for(var i=0;i<str1.length;i++){
    str1[i]=parseFloat(str[i]);
  }

  return str1;

}
var num=StoI(str);
console.log(num);

var test1 = ["stop", "exit","quit"];
var test2=new Array();
var test3=new Array();
var len;
var sum=0;
function lengthOfNonQWords(test1){
for (var i = 0; i < test1.length; i++) {
  if(!test1[i].includes("q")){
    test2.push(test1[i]);
  }
  else{
    test3.push(test1[i]);
  }
}

for (var i = 0; i < test2.length; i++) {
  len=test2[i].length;
  sum=sum+len;
}
console.log(sum);
}
lengthOfNonQWords(test1);

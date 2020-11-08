var str=new Array();
str[0] = "Have a good day!";
str[1] = "Have a bad day!";

var result=Math.round(Math.random());
function load(){
  console.log(str[result]);
}
load();

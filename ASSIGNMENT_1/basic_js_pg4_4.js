function sum(){
  var a=document.getElementById("num").value;
  var sum=0;
  for (var i = 0; i <= a; i++) {
    sum=sum+i;
  }
  document.getElementById("result").innerHTML="Sum is " +sum;
}

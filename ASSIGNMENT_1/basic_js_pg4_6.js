function option(){
  var a=prompt("1. Add 2. Multiply");

  if(a>=1 && a<=2){
    if(a==1){
      var num1=prompt("Enter number 1:");
      var num2=prompt("Enter number 2:");
      if(!isNaN(num1) && !isNaN(num2)){
      document.getElementById("c").innerHTML+="Addition is: "+parseInt(Number(num1)+Number(num2));
      var pause=setTimeout(option,3000);
      }
      else{
        alert("Not a number");
      }


    }
    else if(a==2){
      var num1=prompt("Enter number 1:");
      var num2=prompt("Enter number 2:");
      if(!isNaN(num1) && !isNaN(num2)){
      document.getElementById("c").innerHTML+="Multiplication is: "+parseInt(Number(num1)*Number(num2));
      var pause=setTimeout(option,3000);
      }
      else{
        alert("Not a number");
      }

    }
}
else{
  option();
}
}

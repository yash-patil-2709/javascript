function asterisks(){
  var input1=prompt("Enter number 1:");
  if(input1>=1 && input1<=30){
    var input2=prompt("Enter number 2:");
      if(input2>=1 && input2<=30){
        var input3=prompt("Enter number 3:");
          if(input3>=1 && input3<=30){
              for (var i = 0; i < input1; i++) {
                    document.getElementById("stars1").innerHTML+="*";
              }
              for (var i = 0; i < input2; i++) {
                    document.getElementById("stars2").innerHTML+="*";
              }
              for (var i = 0; i < input3; i++) {
                    document.getElementById("stars3").innerHTML+="*";
              }
          }
          else{
            alert("Not a number");
          }
      }
      else{
        alert("Not a number");
      }
  }
  else{
    alert("Not a number");
  }
}

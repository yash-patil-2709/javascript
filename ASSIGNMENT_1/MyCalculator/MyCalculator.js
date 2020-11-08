function calc(){

    var a=prompt("1. Add 2. Subtract 3. Multiply 4. Divide 5. Exponent 6. Mean 7. Quit");

    if(a>=1 && a<=7){
      if(a==1){
        var num1=prompt("Enter number 1:");
        var num2=prompt("Enter number 2:");
        if(!isNaN(num1) && !isNaN(num2)){
        document.getElementById("c").innerHTML+="Addition is: "+parseInt(Number(num1)+Number(num2));
        var pause=setTimeout(calc,3000);
        }
        else{
          alert("Not a number");
        }


      }
      else if(a==2){
        var num1=prompt("Enter number 1:");
        var num2=prompt("Enter number 2:");
        if(!isNaN(num1) && !isNaN(num2)){
        document.getElementById("c").innerHTML+="Subtraction is: "+parseInt(Number(num1)-Number(num2));
        var pause=setTimeout(calc,3000);
        }
        else{
          alert("Not a number");
        }

      }
      else if(a==3){
        var num1=prompt("Enter number 1:");
        var num2=prompt("Enter number 2:");
        if(!isNaN(num1) && !isNaN(num2)){
        document.getElementById("c").innerHTML+="Multiplication is: "+parseInt(Number(num1)*Number(num2));
        var pause=setTimeout(calc,3000);
        }
        else{
          alert("Not a number");
        }

      }
      else if(a==4){
        var num1=prompt("Enter number 1:");
        var num2=prompt("Enter number 2:");
        if(!isNaN(num1) && !isNaN(num2)){
        document.getElementById("c").innerHTML+="Division is: "+parseInt(Number(num1)/Number(num2))
        var pause=setTimeout(calc,3000);
        }
        else{
          alert("Not a number");
        }
      }
      else if(a==5){
        var num1=prompt("Enter base:");
        var num2=prompt("Enter exponent:");
        if(!isNaN(num1) && !isNaN(num2)){
        document.getElementById("c").innerHTML+="Exponent is: "+(Math.pow(Number(num1),Number(num2)));
        var pause=setTimeout(calc,3000);
        }
        else{
          alert("Not a number");
        }

      }
      else if(a==6){
        var num=prompt("Enter series of numbers:");
        var res = num.substring(num.length - 3, num.length);
        var n = num.indexOf("*");
        console.log(n);
        var sum=0;
        if(res==="***"){
          for (var i = 0; i < n; i++) {
            var result=num.split("",n);


          }
          for(var i=0;i<result.length;i++){
                 sum+=Number(result[i]);
             }
          console.log(result);
          document.getElementById("c").innerHTML+="Mean is: "+parseInt(sum/n);
          var pause=setTimeout(calc,3000);
        }
        else{
          alert("Series not ended");
        }

      }
      else{
        calc();
      }


    }
    else{
      alert("Enter number between 1 to 7");
    }


}

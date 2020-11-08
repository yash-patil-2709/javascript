function option(){
  var number=parseInt(prompt("Enter the number to check"));
var isPrime=true;

if(number==1)
{
  document.getElementById("c").innerHTML="It is neither prime nor composite number";
}
else if(number>1)
{
    for(i=2;i<number;i++)
    {

      if(number%i==0)
      {
          isPrime=false;
          break;
      }
    }
if(isPrime)
{
    document.getElementById("c").innerHTML=`${number} is a prime number`;
}
else{

    document.getElementById("c").innerHTML=`${number} is not a prime number`;
}

}
}

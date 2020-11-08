function option(){
  var number = parseInt(prompt('Enter an integer: '));
  var result;

  for( i = 1; i <= 10; i++) {

    if(number<=12)
    {
      result = i * number;
      console.log(`${number} * ${i} = ${result}`);
    }
    else{
        document.getElementById("c").innerHTML="Enter number less than 12";
    }
  }
}

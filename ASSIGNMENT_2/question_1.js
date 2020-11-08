function prac(){

  function square(x){
  return x*x;
  }

function double(x){
  return x*2;
  }

function composedValue(square,double,x){

  return square(double(x));
  }
  document.getElementById("one").innerHTML="Answer is: " +composedValue(square,double,10);
}

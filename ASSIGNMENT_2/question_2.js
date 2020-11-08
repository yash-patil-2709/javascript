function prac(){

  function square(x){
  return x*x;
  }

function double(x){
  return x*2;
  }

  function compose(square,double,x){

    return square(double(x));
  }

  function compose(square,double,x){

    return double(square(x));
    }
  document.getElementById("one").innerHTML="Answer of doubling and then squaring is: " +compose(square,double,10);
  document.getElementById("two").innerHTML="Answer of squaring and then doubling is: " +compose(double,square,10);
}

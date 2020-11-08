function prac(){
  var l=0;
  var len=0;
  function map(a, square){

    if(l<a.length){
      b.push(square(a[l]));
      ++l;
      return map(a,square);
    }
    else{
      return b;
    }

}

  function square(num){
    return (num*num);
  }

  function map1(c, sqrt){
    if(len<c.length){
      d.push(root(c[len]));
      ++len;
      return map1(c,root);
    }
    else{
      return d;
    }
  }

  function root(num){
    return (Math.sqrt(num));
  }

  var a=[1,2,3,4,5];
  var b=new Array();

  var c=[1,4,9,16,25];
  var d=new Array();

  document.getElementById("one").innerHTML="The squaring of list is: "+map(a,square);
  document.getElementById("two").innerHTML="The root of list is: "+map1(c,root);

}

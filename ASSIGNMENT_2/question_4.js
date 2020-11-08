function prac(){

  function map(a, square){
    for(var i=0;i<a.length;i++){
      b.push(square(a[i]));
    }
    return b;
}

  function square(num){
    return (num*num);
  }

  function map1(c, root){
    for(var j=0;j<c.length;j++){
      d.push(root(c[j]));
    }
    return d;
  }

  function root(num1){
    return (Math.sqrt(num1));
  }

  var a=[1,2,3,4,5];
  var b=new Array();

  var c=[1,4,9,16,25];
  var d=new Array();

  document.getElementById("one").innerHTML="The squaring of list is: "+map(a,square);
  document.getElementById("two").innerHTML="The root of list is: "+map1(c,root);

}

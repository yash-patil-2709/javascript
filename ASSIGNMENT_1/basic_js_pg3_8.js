function isEven(num){
  var qwerty=(num>>0);
  var wert=qwerty.toString(2);

  var boo=wert.charAt((wert.length-1));
  var check=new Boolean(!boo);
  console.log(check);
}
isEven(12);

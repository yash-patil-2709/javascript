function max(a,b,c){
  var d= (a>b ? (a>c ? a:c) : (b>c ? b:c));
  console.log("The greatest number is:" +d);
}
max(3,1,2);

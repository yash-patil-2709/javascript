function padChars(num,str){
  if(str.length>1){
    console.log("Only short string allowed");
  }
  else{
    var result= str.repeat(num);
    console.log(result);
  }
}
padChars(7,"-");

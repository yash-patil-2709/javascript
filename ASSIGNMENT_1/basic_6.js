function numRollsToGetSix(){

  var count=0;
  while(b!=6){
    var a=Math.random();
    var b=Math.ceil(a*6);
    count++;
  }
  console.log(count);
}
numRollsToGetSix();

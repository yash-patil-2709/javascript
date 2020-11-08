function numHeads(c){
var num,h=0;

  for (var i = 0; i < c; i++) {
    num=Math.ceil(Math.random() *10);

    if(num<5){
      h++;
    }

}
console.log(h);
}
numHeads(10);

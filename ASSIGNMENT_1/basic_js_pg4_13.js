var myList=[0,38,12,91,234,1000,456];
function option(){
    var a = myList.indexOf(1000);

      if(a!=-1){
        document.getElementById("c").innerHTML="Element occurs";
      }
      else{
        document.getElementById("c").innerHTML="Element doesn't occur";
      }

}


function option(){
  var arr2 = ["gina", "charles", "rosa","amy","jake"];
  var count=3;
  var temp;
  var i=0;
  for (var i = 0; i < count; i++) {
    temp=arr2[0];

    for(j=0;j<arr2.length;j++){
      arr2[j]=arr2[j+1];
    }
    arr2[arr2.length-1]=temp;
  }

  document.getElementById("c").innerHTML="Shifted array is: "+arr2;
}

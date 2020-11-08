

function option(){
  var arr1 = ["jake", "amy"];
  var arr2 = ["gina", "charles", "rosa"];
  var res=new Array();

  for (var i = 0; i < arr1.length; i++) {
    res.push(arr1[i]);
  }

  for (var i = 0; i < arr2.length; i++) {
    res.push(arr2[i]);
  }
  //return res;
  document.getElementById("c").innerHTML="Concatenated array is: "+res;
}

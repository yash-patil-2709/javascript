function option(){
  var arr1 = ["jake", "amy","holt"];
  var arr2 = ["gina", "charles", "rosa"];
  var res=new Array();

  for (var i = 0; i < arr1.length; i++) {
    res.push(arr1[i]);
  }

  for (var i = 0; i < arr2.length; i++) {
    res.push(arr2[i]);
  }
  //return res;
  res=res.sort();
  document.getElementById("c").innerHTML="Alternate Concatenated ans sorter array is: "+res;

}

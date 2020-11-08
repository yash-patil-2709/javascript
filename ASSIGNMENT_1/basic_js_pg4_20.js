
function option(){
  var arr1 = ["jake", "amy","holt"];
  var arr2 = [1, 2, 3];
  var res=new Array();

  for (var i = 0; i < arr2.length; i++) {
    res.push(arr1[i]);
    res.push(arr2[i]);
  }
  //return res;
  document.getElementById("c").innerHTML="Alternate Concatenated array is: "+res;
}

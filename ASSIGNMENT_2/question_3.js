function prac(){
  function find(a, isEven){
    for(var i=0;i<a.length;i++){
      if(isEven(a[i])){
        return a[i];
      }
    }
  }

  function isEven(num){
    return (num%2==0);
  }
  var a=[12,3,5,7,10];
  document.getElementById("one").innerHTML="The 1st occured even number in list is: "+find(a,isEven);
}

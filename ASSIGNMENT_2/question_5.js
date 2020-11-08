function prac(){
  var l=0;
  function find(a, isEven){
      if(l<a.length){
        if(isEven(a[l])) {
          return a[l];
        }
        else{
          ++l;
          return find(a,isEven);
        }

      }
  }

  function isEven(num){
    return (num%2==0);
  }
  var a=[1,3,5,4,2];
  document.getElementById("one").innerHTML="The 1st occured even number in list using recursion is: "+find(a,isEven);
}

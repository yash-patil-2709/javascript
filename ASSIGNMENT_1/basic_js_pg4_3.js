function greet() {
  var a=document.getElementById("name").value;
  if(a=="alice" || a=="bob"){
  document.getElementById("result").innerHTML="Hello " +a;
  }
  else{
    alert("Not alice or bob");
  }
}

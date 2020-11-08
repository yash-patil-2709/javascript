function prac(){
  var name = '{"fname":"John", "lname":"devnur"}'
  var obj=JSON.parse(name);
  document.getElementById("one").innerHTML = obj.fname + ", " + obj.lname;
}
